import React from 'react';
import '../style/App.css';
import '../style/ReactDropdown.css';
import Dropdown from 'react-dropdown';

const App = ({options, selectedLanguage, changeLanguage, word, changeWord, languageList, submit, setOptions, info, conjugatedWord}) => {
  let optionListForm = [];
  let optionBulletForm = [];
  for(let k in options) {
    if (options[k].length > 2){
      optionListForm.push(<Dropdown key={k} value={info[k]} options={options[k]} placeholder={k} onChange={(a) => {setOptions(k,a.value)}}/>)
    } else {
      options[k].map(element => {
        let radioOption = `${element}`;
        return (optionBulletForm.push(<label key={element}><input key={element} type="radio" name={k} value={element} onChange={(selection) => {setOptions(element,selection.value)}}/>{radioOption}</label>)
        )})
    }}

  return (
    <div className="App">
      <div>
        <h1>Select Your Language!</h1>
      </div>

      <Dropdown options={languageList} onChange={(languageOption) => {changeLanguage(languageOption.value)}} value={selectedLanguage} placeholder="Please Select Language" />
      {optionListForm}
      {optionBulletForm}
      <div>
        <input type="text" name="word" placeholder="Please input word" value={word} onChange={(e) => {
          changeWord(e.target.value);
        }} />
    </div>

    <div>
      <button type="button" className="btn btn-primary" onClick={submit}>Submit</button>
    </div>

    <h1>{conjugatedWord}</h1>
  </div>
  );
}

export default App;
