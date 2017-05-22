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
      <div className="title-container">
        <span className="title" >CONJUGATOR</span>
      </div>
      <div className='content-container'>
        <p className="instruction_text">Select Your Language!</p>
        <div className="dropdown">
          <Dropdown 
          options={languageList} onChange={changeLanguage} 
          value={selectedLanguage} placeholder="Please Select Language" 
          />
        </div>
         <div className="radio option_text">
           <label className="button">
             <input type="radio" /> Option 1
           </label>
           <label className="button">
             <input type="radio" /> Option 2
           </label>
           <label className="button">
             <input type="radio" /> Option 3
           </label>
           <label className="button">
             <input type="radio" /> Option 4
           </label>
           <label className="button">
             <input type="radio" /> Option 5
           </label>
           <label className="button">
             <input type="radio" /> Option 6
           </label>
         </div>

      <Dropdown options={languageList} onChange={(languageOption) => {changeLanguage(languageOption.value)}} value={selectedLanguage} placeholder="Please Select Language" />
      {optionListForm} {optionBulletForm}
      <div>
        <input type="text" className="input-box" name="word" placeholder="Please input word" value={word} onChange={(e) => {
          changeWord(e.target.value);
        }} />
    </div>

    <h1>{conjugatedWord}</h1>
        <p className="instruction_text">Type Your Word</p>
      <div>
        <img src="/arrow_button_white.png"
          width="73" height="auto" onClick={ () => { submit(); } } />
        <input type="text" className="output-box"/>
      </div>
    </div>  
 </div>


);
}

export default App;
