import React from 'react';
import './App.css';

class SampleData2Button extends React.Component {
	render() {
		return (
			<button className="button1" id="sampleDataButton2" onClick={() => this.props.onClick()}>
				Generate sample data 2
			</button>
		);
	}
}

export default SampleData2Button;
