import React, { Component } from 'react';
import '../style/App.css';

const App = ({word, selectedLanguage, changeLanguage, submit, changeWord}) => {
  return (
    <div className="App">
      <div>
        <form>
          <input type="text" name="word" placeholder="Please input word" value={word} onChange={(e) => {
            changeWord(e.target.value);
          }}/>
      </form>
    </div>

    <select className="bootstrap-select">
      <option selected={selectedLanguage === 'Korean'} onChange={() => {
        changeLanguage('Korean'); 
      }}>Korean</option>
    <option selected={selectedLanguage === 'French'} onChange={() => {
      changeLanguage('French');
    }}>French</option>
  <option selected={selectedLanguage === 'Hindi'} onChange={() => {
    changeLanguage('Hindi');
  }}>Hindi</option>
    </select>

    <div>
      <button type="button" className="btn btn-primary" onChange={() => {
        submit();
      }}>Submit</button>
  </div>
</div>
);
}



export default App;
