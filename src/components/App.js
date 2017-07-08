import React from 'react';
import '../style/App.css';
import '../style/ReactDropdown.css';
import Dropdown from 'react-dropdown';
import myImage from '../assets/arrow_button_white.png';

const RadioButtonOptions = ({options, setOptions, title}) => {
  let radioOptions = [];
    options.map(element => {
      radioOptions.push(
        <label className="button" key={element}>
          <input type="radio" name={title} value={element} onChange={() => {setOptions(title, element)}}/>{`${element}`}
        </label>);
    })
  return (<div className="radio-group"><div className="radio-title">{title}</div><span>{radioOptions}</span></div>);
  }

const App = ({options, selectedLanguage, changeLanguage, word, changeWord, languageList, submit, setOptions, info, conjugatedWord}) => {
  let wordTypeForm = '';
  let optionListForm = [];
  let optionBulletForm = [];
  console.log('component options:', options);
  wordTypeForm =
    <RadioButtonOptions
      options={Object.keys(options)}
      setOptions={setOptions}
      title='WordType'
    />
  console.log('info:', info);
  let chosenType = info.WordType || 'verb';
  for(let title in options[chosenType]) {
    if (options[chosenType][title].length > 2){
      optionListForm.push(
        <div key={title} className="option">
          <div className="option-title">{title}</div>
            <div className="option-menu">
              <Dropdown value={options[chosenType][title]} options={options[chosenType][title]} onChange={(tense) => {setOptions(title,tense.value)}}/>
            </div>
        </div>)
    } else {
      optionBulletForm.push(<RadioButtonOptions key={title} options={options[chosenType][title]} setOptions={setOptions} title={title}/>);
    }}

  return (

    <div className="App">
      <div className="title-container">
        <span className="title" >CONJUGATOR</span>
      </div>
      <div className='content-container'>
        <p className="instruction-text">Select Your Language!</p>
        <Dropdown 
          options={languageList} onChange={(languageOption) => {changeLanguage(languageOption.value)}} 
          value={selectedLanguage} placeholder="Please Select Language" 
        />
        {wordTypeForm}
        {optionBulletForm} {optionListForm}
        <p className="instruction-text">Type Your Word</p>    
        <input 
          type="text" className="input-box" name="word" placeholder="Please input word" value={word} onChange={(e) => {
          changeWord(e.target.value);
          }} 
        />
        <div>
          <img className="conjugate-button"
            src={myImage}
            width="73" height="auto" onClick={ submit } />
        </div>
        <input className="output-box" type="textbox" name="output" value={conjugatedWord} />
      </div>  
    </div>


  );
};

export default App;
