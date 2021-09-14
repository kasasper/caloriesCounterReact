import React from 'react';
// import logo from './logo.svg';
import './App.css';

class SearchForm extends React.Component {
	preventEnter(e) {
		const code = e.keyCode || e.which;
		if (code == 13) {
			e.preventDefault();
			return false;
		}
	}

	searchElement(e) {
		const term = e.target.value.toLowerCase();
		const elements = document.querySelectorAll('.old-element');
		elements.forEach((e) => {
			const name = e.firstElementChild.textContent;
			name.toLowerCase().indexOf(term) == -1 ? (e.style.display = 'none') : (e.style.display = 'inline-table');
		});
	}
	render() {
		return (
			<form id="search-element">
				<input
					type="text"
					id="search-element-input"
					placeholder="Search element..."
					onKeyUp={this.searchElement}
					onKeyPress={this.preventEnter}
				/>
			</form>
		);
	}
}

export default SearchForm;
