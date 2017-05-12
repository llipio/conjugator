import React, { Component } from 'react';
import '../style/App.css';

const App = ({word, preferredLanguage, option}) => {
  return (
    <div className="App">
      <div>
        <form>
          <input type="text" name="word" placeholder="Please input word"/>
          {word}
        </form>
      </div>

      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Languages
            <span className="caret"></span></button>
            <ul className="dropdown-menu">
        <li><a href="#">Korean</a></li>
            <li><a href="#">French</a></li>
        <li><a href="#">Hindi</a></li>
      </ul>
    </div>

    <div>
      <button type="button" className="btn btn-primary">Submit</button>
    </div>
  </div>
  );
}



export default App;
