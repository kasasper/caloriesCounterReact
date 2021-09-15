import React from 'react';
// import logo from './logo.svg';
import './App.css';

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isHidden: true, search: '' };
	}

	preventEnter(e) {
		const code = e.keyCode || e.which;
		if (code === 13) {
			e.preventDefault();
			return false;
		}
	}

	afterSetStateSearch() {
		this.state.search.length > 0 ? this.setState({ isHidden: false }) : this.setState({ isHidden: true });
	}

	handleChange = (event) => {
		this.setState(
			{
				search: event.target.value
			},
			() => {
				this.afterSetStateSearch();
			}
		);
	};

	clearSearchValue = () => {
		this.setState(
			{
				search: ''
			},
			() => {
				this.afterSetStateSearch();
				const elements = document.querySelectorAll('.old-element');
				elements.forEach((e) => {
					e.style.display = 'inline-table';
				});
			}
		);
	};

	searchElement(e) {
		const term = e.target.value.toLowerCase().trim();
		const elements = document.querySelectorAll('.old-element');
		elements.forEach((e) => {
			const name = e.querySelector('.btn-element-name').textContent;
			name.toLowerCase().indexOf(term) === -1 ? (e.style.display = 'none') : (e.style.display = 'inline-table');
		});
	}
	render() {
		const visibility = this.state.isHidden ? 'hidden' : '';
		return (
			<form id="search-element">
				<input
					value={this.state.search}
					type="text"
					id="search-element-input"
					placeholder="Search element..."
					onKeyUp={this.searchElement}
					onKeyPress={this.preventEnter}
					onChange={this.handleChange}
				/>
				<button className={`close insearch ${visibility}`} onClick={this.clearSearchValue}>
					x
				</button>
			</form>
		);
	}
}

export default SearchForm;
