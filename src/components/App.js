import React, { Component } from 'react';
import '../style/App.css';
import ReactDropdown from '../style/Dropdown'
import Dropdown from 'react-dropdown'

const App = ({word, selectedLanguage, changeLanguage, submit, changeWord}) => {
  const languageList = ['Korean', 'French', 'Hindi'];

  return (
    <div className="App">
      <div>
        <h1>Select Your Language!</h1>
      </div>

      
    <Dropdown options={languageList} onChange={changeLanguage} value={selectedLanguage} placeholder="Please Select Language" />

      <div>
        <form>
          <input type="text" name="word" placeholder="Please input word" value={word} onChange={(e) => {
            changeWord(e.target.value);
          }}/>
      </form>
    </div>


    <div>
      <button type="button" className="btn btn-primary" onChange={() => {
        submit();
      }}>Submit</button>
  </div>
</div>
);
}

export default App;
