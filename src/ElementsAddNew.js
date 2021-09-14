import React from 'react';
import './App.css';
import MyForm from './MyForm';

class ElementsAddNew extends React.Component {
	render() {
		return (
			<span className="btn-element new-element">
				<p className="add-new" onClick={() => this.props.onClick()}>
					<br />+ <br /> ADD NEW ELEMENT
				</p>
				<div className="form">
					<MyForm
						setToLocalStorage={this.props.setToLocalStorage}
						generateHTML={this.props.generateHTML}
						toggleForm={this.props.toggleForm}
						setList={this.props.setList}
						getFromLocalStorage={this.props.getFromLocalStorage}
					/>
				</div>
			</span>
		);
	}
}

export default ElementsAddNew;
