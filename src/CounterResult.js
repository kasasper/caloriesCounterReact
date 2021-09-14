import React from 'react';
import './App.css';

export default class CounterResult extends React.Component {
	render() {
		return (
			<span>
				<div className="result">SUM: {this.props.sum} kcal</div>
				<div className="yourGoal">Your goal: {this.props.userGoal} kcal</div>
				<div className="goalDifference" />
			</span>
		);
	}
}
