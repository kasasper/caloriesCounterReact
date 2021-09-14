import React from 'react';
import './App.css';

class CounterElement extends React.Component {
	id = this.props.name + Math.floor(Math.random() * 1000);
	constructor(props) {
		super(props);
		this.state = {
			size: props.size1,
			calories: props.calories
		};
	}

	componentDidMount() {
		this.addToCounter();
	}

	addToCounter = () => {
		let newCalc = this.props.caloriesArray;
		newCalc.push({
			product: this.id,
			calories: this.state.calories
		});
		this.props.setCaloriesArray(newCalc);
		this.props.summarize();
	};

	changeCaloriesArrayEdit = () => {
		let objIndex = this.props.caloriesArray.findIndex((obj) => obj.product === this.id);
		this.props.caloriesArray[objIndex].calories = this.state.calories;
		//https://stackoverflow.com/questions/4689856/how-to-change-value-of-object-which-is-inside-an-array-using-javascript-or-jquer#:~:text=348-,It%20is%20quite%20simple,-Find%20the%20index
	};

	handleChange = (e) => {
		this.setState(
			{
				size: e.target.value
			},
			() => {
				let size = this.state.size;
				if (size < 0 || isNaN(size)) size = 0;
				if (this.props.size2 === 'g') size = size / 100;
				size = Math.floor(this.props.calories * size);
				this.setState({ calories: size }, () => {
					this.changeCaloriesArrayEdit();
					this.props.summarize();
				});
			}
		);
	};
	render() {
		return (
			<li>
				<span className="counter-name">{this.props.name}</span>
				<span className="counter-cal">{this.state.calories} kcal</span>
				<input className="counter-size" defaultValue={this.props.size1} onChange={this.handleChange} />
				<span className="counter-size-pack">{this.props.size2}</span>
				<span className="close" onClick={() => console.log('todo')}>
					x
				</span>
			</li>
		);
	}
}

export default CounterElement;
