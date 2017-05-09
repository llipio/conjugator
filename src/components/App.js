import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';

const App = ({name, changeName}) => {
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Name: {name}
        </p>
        <button onClick={ () => {
          changeName();
        } }>Change Name</button>
      </div>
  );
}

export default App;
