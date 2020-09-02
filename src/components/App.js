import React, { Component } from 'react';
import './App.css';
import { Portfolio } from './Portfolio/Portfolio';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedSection: "" 
    }
  }

  handleSectionClick = () => {
    alert('A button was clicked'); 
  }

  render() {
    return (
        <div className="App">
          <Portfolio 
            handleSectionClick
          />
        </div>
    );
  }
}

export default App;
