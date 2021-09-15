import React from 'react';
import './App.css';

export default class CounterResult extends React.Component {
	render() {
		const error = this.props.diffWarning ? 'error-message' : '';
		return (
			<span>
				<div className="result">SUM: {this.props.sum} kcal</div>
				<div className="yourGoal">Your goal: {this.props.userGoal} kcal</div>
				<div className={`goalDifference ${error}`}>{this.props.diffText}</div>
			</span>
		);
	}
}
