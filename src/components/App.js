import React, { Component } from 'react';
import '../style/App.css';
import '../style/ReactDropdown.css';
import Dropdown from 'react-dropdown';

const App = ({options, selectedLanguage, changeLanguage, word, changeWord, languageList, submit, setOptions, info, conjugatedWord}) => {
  let optionList = [];
  for(let k in options){
    optionList.push(<Dropdown key={k} value={info[k]} options={options[k]} placeholder={k} onChange={(a) => {setOptions(k,a.value)}}/>)
  }

  return (
    <div className="App">
      <div>
        <h1>Select Your Language!</h1>
      </div>

      <Dropdown options={languageList} onChange={(languageOption) => {changeLanguage(languageOption.value)}} value={selectedLanguage} placeholder="Please Select Language" />
      {optionList}
      <div>
        <form>
          <input type="text" name="word" placeholder="Please input word" value={word} onChange={(e) => {
            changeWord(e.target.value);
          }} />
      </form>
    </div>

    <div>
      <button type="button" className="btn btn-primary" onClick={submit}>Submit</button>
  </div>

    <h1>{conjugatedWord}</h1>
    </div>
);
}

export default App;
