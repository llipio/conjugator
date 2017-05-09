import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';

const App = ({name, changeName}) => {
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Conjugator</h2>
        </div>
        <p><a href="https://travis-ci.org/llipio/conjugator"><img src="https://travis-ci.org/llipio/conjugator.svg?branch=master" alt="Build Status" /></a></p>
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
