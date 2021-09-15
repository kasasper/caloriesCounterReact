import React from 'react';
import './App.css';
import Settings from './Settings';

export default class SettingsGoalButton extends React.Component {
	preventEnter(e) {
		const code = e.keyCode || e.which;
		if (code === 13) {
			e.preventDefault();
			return false;
		}
	}

	render() {
		return (
			<span>
				<button className="button1" id="settingsGoal" onClick={() => this.props.onClick()}>
					Settings
				</button>
				<div className="form">
					<Settings
						onKeyPress={this.preventEnter}
						setToLocalStorage={this.props.setToLocalStorage}
						toggleForm={this.props.toggleForm}
						goal={this.props.goal}
						setGoal={this.props.setGoal}
					/>
				</div>
			</span>
		);
	}
}
