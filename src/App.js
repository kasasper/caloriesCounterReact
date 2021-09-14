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
			sum: 0
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

	setCounter = (array) => {
		this.setState({ counter: array })
	};

	setCaloriesArray = (array) => {
		this.setState({ caloriesArray: array });
	};

	componentDidMount() {
		this.init();
		this.initGoal();
		this.setList();
	}

	clearAll() {
		this.setToLocalStorage('app', []);
		this.setList();
		// removeElements();
		// clearCounterText();
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

	summarize = () => {
		let newSum = 0;
		let s = this.state.caloriesArray;
		for (let e of s) {
			newSum += parseInt(e.calories);
		}
		this.setState({ sum: newSum });
	};

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
							generateHTML={this.generateHTML}
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
						<ClearCounterButton onClick={() => console.log('TODO')} />
						<SettingsGoalButton onClick={() => this.toggleForm('settings')} />
						<CounterBase
							counter={this.state.counter}
							setCaloriesArray={this.setCaloriesArray}
							caloriesArray={this.state.caloriesArray}
							summarize={this.summarize}
						/>
						<CounterResult userGoal={this.state.goal} sum={this.state.sum} />
					</div>
				</div>
			</div>
		);
	}
}
