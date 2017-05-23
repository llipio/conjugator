import React from 'react';
import '../style/App.css';
import '../style/ReactDropdown.css';
import Dropdown from 'react-dropdown';

const RadioButtonOptions = ({options, setOptions, title}) => {
  let radioOptions = [];
    options.map(element => {
      radioOptions.push(
        <label className="button" key={element}>
          <input type="radio" name={title} value={element} onChange={() => {setOptions(title, element)}}/>{`${element}`}
        </label>)
    })
  return (<div className="radio option_text">{title}{radioOptions}</div>);
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
      <div className="title-container">
        <span className="title" >CONJUGATOR</span>
      </div>
      <div className='content-container'>
        <p className="instruction_text">Select Your Language!</p>
      <Dropdown options={languageList} onChange={(languageOption) => {changeLanguage(languageOption.value)}} value={selectedLanguage} placeholder="Please Select Language" />
      {optionListForm} {optionBulletForm}
        <p className="instruction_text">Type Your Word</p>    
    <input type="text" className="input-box" name="word" placeholder="Please input word" value={word} onChange={(e) => {
          changeWord(e.target.value);
        }} />
        <img className="image" src="/arrow_button_white.png"
          width="73" height="auto" onClick={ () => { submit(); } } />
        <label>
          <input className="output-box" type="textbox" name="output" value={conjugatedWord} />
        </label>
    </div>  
 </div>


);
}

export default App;
