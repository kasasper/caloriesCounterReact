import React from 'react';
// import logo from './logo.svg';
import './App.css';

class SearchForm extends React.Component {
	render() {
		return (
			<form id="search-element">
				<input
					type="text"
					id="search-element-input"
					placeholder="Search element..."
					onKeyPress={() => {
						return Event.keyCode !== 13; //dont works TODO fix
					}}
				/>
			</form>
		);
	}
}

export default SearchForm;
