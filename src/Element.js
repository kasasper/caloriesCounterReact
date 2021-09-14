import React from 'react';
import './App.css';

class Element extends React.Component {
	addToCounter = () => {
		let newCounter = this.props.counter;
		newCounter.push({
			product: this.props.name,
			calories: this.props.calories,
			size: this.props.size1,
			sizeType: this.props.size2
		});
		this.props.setCounter(newCounter);
	};
	render() {
		return (
			<span className="btn-element old-element" onClick={() => this.addToCounter()}>
				<p className="btn-element-name">{this.props.name}</p>
				<p className="btn-element-cal">{this.props.calories} kcal</p>
				<p className="btn-element-size">
					{this.props.size1} {this.props.size2}
				</p>
			</span>
		);
	}
}

export default Element;
