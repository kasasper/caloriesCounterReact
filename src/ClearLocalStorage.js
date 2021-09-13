import React from 'react';
import './App.css';

class ClearLocalStorage extends React.Component {
	render() {
		return (
			<button className="button1" id="clearLocalStorage" onClick={() => this.props.onClick()}>
				Remove all
			</button>
		);
	}
}

export default ClearLocalStorage;
