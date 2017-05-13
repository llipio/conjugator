import React, { Component } from 'react';
import '../style/App.css';

const App = ({word, selectedLanguage, changeLanguage, submit, changeWord}) => {
  const dropdownLanguageList = [];
  const languageList = ['Korean', 'French', 'Hindi'];
  languageList.forEach((e) => {
    dropdownLanguageList.push(<option selected={selectedLanguage === e} onChange={() => {
      changeLanguage(e);
    }}>{e}</option>);  
  });

  return (
    <div className="App">
      <div>
        <form>
          <input type="text" name="word" placeholder="Please input word" value={word} onChange={(e) => {
            changeWord(e.target.value);
          }}/>
      </form>
    </div>

    <select className="bootstrap-select">{dropdownLanguageList}</select>

    <div>
      <button type="button" className="btn btn-primary" onChange={() => {
        submit();
      }}>Submit</button>
  </div>
    </div>
  );
}

export default App;
