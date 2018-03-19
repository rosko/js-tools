import './App.scss';

import React, { Component } from 'react';
import Logo from './Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-heading App-flex">
          <h2>
            Welcome to <span className="App-react">JS Fest</span>
          </h2>
        </div>
        <div className="App-instructions App-flex">
          <Logo />
          <p>
            Edit <code>src/App.js</code> and save to hot reload your changes.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
