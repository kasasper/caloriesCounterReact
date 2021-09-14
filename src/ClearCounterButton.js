import React from 'react';
import './App.css';

export default class ClearCounterButton extends React.Component {
	render() {
		return (
			<button className="button1" id="clearCounter" onClick={() => this.props.onClick()}>
				Remove all
			</button>
		);
	}
}
