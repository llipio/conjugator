import React from 'react';
import '../style/App.css';
import '../style/ReactDropdown.css';
import Dropdown from 'react-dropdown';

const RadioButtonOptions = ({options, setOptions, title}) => {
  let radioOptions = [];
    options.map(element => {
      radioOptions.push(
        <label key={element}>
          <input type="radio" name={title} value={element} onChange={() => {setOptions(title, element)}}/>{`${element}`}
        </label>)
    })
  return (<div>{title}{radioOptions}</div>);
  }

const App = ({options, selectedLanguage, changeLanguage, word, changeWord, languageList, submit, setOptions, info, conjugatedWord}) => {
  let optionListForm = [];
  let optionBulletForm = [];
  for(let title in options) {
    if (options[title].length > 2){
      optionListForm.push(<Dropdown key={title} value={info[title]} options={options[title]} placeholder={title} onChange={(tense) => {setOptions(title,tense.value)}}/>)
    } else {
      optionBulletForm.push(<RadioButtonOptions key={title} options={options[title]} setOptions={setOptions} title={title}/>);
    }}

  return (
    <div className="App">
      <div>
        <h1>Select Your Language!</h1>
      </div>

      <Dropdown options={languageList} onChange={(languageOption) => {changeLanguage(languageOption.value)}} value={selectedLanguage} placeholder="Please Select Language" />
      {optionListForm} {optionBulletForm}
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
