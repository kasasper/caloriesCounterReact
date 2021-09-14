import React from 'react';
import './App.css';

export default class SettingsGoalButton extends React.Component {
	render() {
		return (
			<span>
				<button className="button1" id="settingsGoal" onClick={() => this.props.onClick()}>
					Settings
				</button>
				<div className="form">
					<form id="settings">
						<fieldset>
							<legend>Settings</legend>
							<label htmlFor="goal">Calories goal</label>
							<br />
							<input type="text" id="goal" />
							<br />
							<span id="error-goal" className="error-message" />
							<button className="button1" type="button" id="settingsSave">
								Save
							</button>
						</fieldset>
					</form>
				</div>
			</span>
		);
	}
}
