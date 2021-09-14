import React from 'react';
import './App.css';

class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pname: '', calories: '', size: 'default' };

		this.handleChange = this.handleChange.bind(this);
		this.addNew = this.addNew.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	addToLocalStorage(string, newItem) {
		let localStorage = this.props.getFromLocalStorage(string);
		localStorage.push(newItem);
		this.props.setToLocalStorage(string, localStorage);
	}

	validate() {
		const valpname = this.isValidName();
		const valcalories = this.isValidNumber();
		return valpname && valcalories ? true : false;
	}

	isValidName() {
		const letters = /^[a-zA-Z ]+$/;
		if (this.state.pname.trim() === '') {
			document.getElementById('error-pname').innerHTML = 'Field cannot be blank <br>';
			return false;
		}
		else {
			if (this.searchInElementsBase(this.state.pname)) {
				document.getElementById('error-pname').innerHTML = 'Name have to be unique <br>';
				return false;
			}
			else {
				if (this.state.pname.match(letters)) {
					document.getElementById('error-pname').innerHTML = '';
					return true;
				}
				else {
					document.getElementById('error-pname').innerHTML = 'Enter A-z  value only <br>';
					return false;
				}
			}
		}
	}

	isValidNumber() {
		const num = this.state.calories;
		if (num.trim() === '') {
			document.getElementById('error-calories').innerHTML = 'Field cannot be blank <br>';
			return false;
		}
		else {
			if (isNaN(num)) {
				document.getElementById('error-calories').innerHTML = 'Enter numeric value only <br>';
				return false;
			}
			else {
				document.getElementById('error-calories').innerHTML = '';
				return true;
			}
		}
	}

	searchInElementsBase(stringSearch) {
		let localStorageCheck = this.props.getFromLocalStorage('app');
		for (let l of localStorageCheck) {
			if (stringSearch.trim().toLowerCase() === l.product.toLowerCase()) {
				return true;
			}
		}
		return false;
	}

	addNew() {
		let sizeElement;
		switch (this.state.size) {
			case 'default':
				sizeElement = [
					'100',
					'g'
				];
				break;
			case 'package':
				sizeElement = [
					'1',
					'package'
				];
				break;
			default:
				sizeElement = [
					'100',
					'g'
				];
		}
		let newItem = {
			product: this.state.pname.trim(),
			calories: this.state.calories.trim(),
			size: sizeElement[0],
			sizeType: sizeElement[1]
		};

		if (this.validate()) {
			this.addToLocalStorage('app', newItem);
			this.props.setList();
			this.props.toggleForm();
		}
	}
	render() {
		return (
			<form id="myform">
				<label htmlFor="pname">Product name:</label>
				<br />
				<input type="text" value={this.state.pname} onChange={this.handleChange} id="pname" />
				<br />
				<span id="error-pname" className="error-message" />
				<label htmlFor="calories">Calories:</label>
				<br />
				<input type="text" value={this.state.calories} onChange={this.handleChange} id="calories" />
				<br />
				<span id="error-calories" className="error-message" />
				<label htmlFor="size">Size:</label>
				<br />
				<select id="size" defaultValue={this.state.size} onChange={this.handleChange}>
					<option value="default">100 g</option>
					<option value="package">1 package</option>
				</select>
				<br />
				<br />
				<button className="button1" type="button" id="add" onClick={this.addNew}>
					Add
				</button>
			</form>
		);
	}
}

export default MyForm;
