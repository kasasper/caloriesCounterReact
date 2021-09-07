import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="header">
        <h2>Elements</h2>
        <form id="search-element">
            <input type="text" id="search-element-input" placeholder="Search element..." onkeypress="return event.keyCode != 13;"></input>
        </form>
        <button class="button1"id="sampleDataButton">Generate sample data 1</button>
        <button class="button1"id="sampleDataButton2">Generate sample data 2</button>
        <button class="button1"id="clearLocalStorage">Remove all</button>
        </div>
        <div class="elements-row">
            <span id="base">
            </span>
            <span class="btn-element new-element">
                <p class="btn-element"><p class="add-new"><br></br>+ <br></br> ADD NEW ELEMENT</p></p>
            </span>
        </div>
    </div>
    );
  }
}

export default App;
