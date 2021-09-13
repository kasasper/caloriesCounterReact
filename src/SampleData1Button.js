import React from 'react';
import './App.css';

export default class SampleData1Button extends React.Component {
	render() {
		return (
			<button className="button1" id="sampleDataButton" onClick={() => this.props.onClick()}>
				Generate sample data 1
			</button>
		);
	}
}
