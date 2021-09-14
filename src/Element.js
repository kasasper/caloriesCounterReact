import React from 'react';
import './App.css';

class Element extends React.Component {
	render() {
		return (
			<span className="btn-element old-element">
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
