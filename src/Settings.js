import React from 'react';
import './App.css';

class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = { goal: '' };
	}

	handleChange = (event) => {
		this.setState({ goal: event.target.value });
	};

	addToLocalStorage(string, value) {
		this.props.setToLocalStorage(string, value);
	}

	validate() {
		return this.isValidNumber() ? true : false;
	}

	isValidNumber() {
		const num = this.state.goal;
		if (num.trim() === '') {
			document.getElementById('error-goal').innerHTML = 'Field cannot be blank <br>';
			return false;
		}
		else {
			if (isNaN(num)) {
				document.getElementById('error-goal').innerHTML = 'Enter numeric value only <br>';
				return false;
			}
			else {
				if (num <= 0) {
					document.getElementById('error-goal').innerHTML = 'Enter value greater than zero <br>';
					return false;
				}
				else {
					document.getElementById('error-goal').innerHTML = '';
					return true;
				}
			}
		}
	}

	changeGoal = () => {
		const num = this.state.goal;
		if (this.validate()) {
			this.addToLocalStorage('goal', num.trim());
			this.props.setGoal();
			this.props.toggleForm();
		}
	};
	render() {
		return (
			<form id="settings">
				<fieldset>
					<legend>Settings</legend>
					<label htmlFor="goal">Calories goal</label>
					<br />
					<input type="text" defaultValue={this.state.goal} onChange={this.handleChange} id="goal" />
					<br />
					<span id="error-goal" className="error-message" />
					<button className="button1" type="button" id="settingsSave" onClick={this.changeGoal}>
						Save
					</button>
				</fieldset>
			</form>
		);
	}
}

export default Settings;
