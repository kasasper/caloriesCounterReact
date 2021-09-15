import React from 'react';
import SearchForm from './SearchForm';
// import logo from './logo.svg';
import './App.css';
import ElementsBase from './ElementsBase';
import ElementsAddNew from './ElementsAddNew';
import SampleData1Button from './SampleData1Button';
import SampleData2Button from './SampleData2Button';
import ClearLocalStorage from './ClearLocalStorage';
import { sampleData1, sampleData2 } from './utils';
import ClearCounterButton from './ClearCounterButton';
import SettingsGoalButton from './SettingsGoalButton';
import CounterBase from './CounterBase';
import CounterResult from './CounterResult';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			counter: [],
			caloriesArray: [],
			goal: 2000,
			sum: 0,
			diffText: '',
			diffWarning: false
		};
	}

	init() {
		return this.getFromLocalStorage('app') || this.setToLocalStorage('app', []);
	}

	initGoal() {
		return (this.userGoal = this.getFromLocalStorage('goal') || this.setToLocalStorage('goal', 2000));
	}

	getFromLocalStorage(item) {
		const localStorageItem = localStorage.getItem(item);
		return localStorageItem ? JSON.parse(localStorageItem) : null;
	}

	setToLocalStorage(string, items) {
		localStorage.setItem(string, JSON.stringify(items));
	}

	setList = () => {
		this.setState({ list: this.getFromLocalStorage('app') });
	};

	setGoal = () => {
		this.setState({ goal: this.getFromLocalStorage('goal') }, () => {
			this.goalDifference();
		});
	};

	setCounter = (array) => {
		this.setState({ counter: array });
	};

	setCaloriesArray = (array) => {
		this.setState({ caloriesArray: array });
	};

	componentDidMount() {
		this.init();
		this.initGoal();
		this.setList();
		this.setGoal();
	}

	clearAll() {
		this.setToLocalStorage('app', []);
		this.setList();
		this.removeElementsInCounter();
	}

	generateSample(data) {
		const localStorage = this.getFromLocalStorage('app');
		let res = [];
		for (let i of data) {
			for (let l of localStorage) res.push(l.product);
			res.findIndex((str) => str === i.product) === -1
				? localStorage.push(i)
				: console.log(i.product + ' is in base');
		}
		this.setToLocalStorage('app', localStorage);
		this.setList();
	}

	toggleForm(id = window.event.target.closest('form').id) {
		const form = document.querySelector(`form#${id}`);
		if (form.parentElement.className === 'form') {
			form.parentElement.setAttribute('class', 'form-active');
			const target = window.event.target.closest('span');
			target.classList.add('active');
		}
		else {
			form.parentElement.setAttribute('class', 'form');
			let inputs = document.querySelectorAll(`form#${id} input`);
			for (let input of inputs) {
				input.value = '';
			}
			const target = window.event.target.closest('span');
			target.classList.remove('active');
			let errorMessages = document.querySelectorAll(`form#${id} span[id*="error-"]`);
			for (let error of errorMessages) {
				error.innerHTML = '';
			}
		}
	}

	removeElementsInCounter = () => {
		this.setState({
			counter: [],
			caloriesArray: [],
			sum: 0,
			diffText: `You can eat ${this.state.goal} more kcal.`,
			diffWarning: false
		});
	};

	summarize = () => {
		let newSum = 0;
		let s = this.state.caloriesArray;
		for (let e of s) {
			newSum += parseInt(e.calories);
		}
		this.setState({ sum: newSum }, () => {
			this.goalDifference();
		});
	};

	goalDifference() {
		const difference = this.state.goal - this.state.sum;
		if (difference > 0) {
			this.setState({ diffText: `You can eat ${difference} more kcal.`, diffWarning: false });
		}
		else if (difference === 0) {
			this.setState({ diffText: `Perfect. You have reached your goal.`, diffWarning: false });
		}
		else if (difference < 0) {
			this.setState({ diffText: `You have ate ${Math.abs(difference)} kcal too much.`, diffWarning: true });
		}
		else {
			this.setState({ diffText: `Something were wrong.`, diffWarning: true });
		}
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="header">
						<h2>Elements</h2>
						<SearchForm />
						<SampleData1Button onClick={() => this.generateSample(sampleData1)} />
						<SampleData2Button onClick={() => this.generateSample(sampleData2)} />
						<ClearLocalStorage onClick={() => this.clearAll()} />
					</div>
					<div className="elements-row">
						<ElementsBase
							list={this.state.list}
							counter={this.state.counter}
							setCounter={this.setCounter}
						/>
						<ElementsAddNew
							setToLocalStorage={this.setToLocalStorage}
							toggleForm={this.toggleForm}
							getFromLocalStorage={this.getFromLocalStorage}
							setList={this.setList}
							onClick={() => this.toggleForm('myform')}
						/>
					</div>
				</div>
				<div className="container">
					<div className="header">
						<h2>Counter</h2>
						<ClearCounterButton onClick={this.removeElementsInCounter} />
						<SettingsGoalButton
							onClick={() => this.toggleForm('settings')}
							setToLocalStorage={this.setToLocalStorage}
							toggleForm={this.toggleForm}
							goal={this.state.goal}
							setGoal={this.setGoal}
						/>
						<CounterBase
							counter={this.state.counter}
							setCaloriesArray={this.setCaloriesArray}
							caloriesArray={this.state.caloriesArray}
							summarize={this.summarize}
						/>
						<CounterResult
							userGoal={this.state.goal}
							sum={this.state.sum}
							diffText={this.state.diffText}
							diffWarning={this.state.diffWarning}
						/>
					</div>
				</div>
			</div>
		);
	}
}
