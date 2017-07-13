import React from 'react';
import '../style/App.css';
import '../style/ReactDropdown.css';
import Dropdown from 'react-dropdown';
import myImage from '../assets/arrow_button_white.png';

const App = ({wordType,options, selectedLanguage, changeLanguage, word, changeWord, languageList, submit, setOptions, info, conjugatedWord, title}) => {
  let wordTypeForm = '';
  let optionListForm = [];
  let optionBulletForm = [];
  wordTypeForm =
    <Dropdown
      options={Object.keys(options)}
      displayTitle='Word Type'
      value={info.wordType}
      onChange={(wordType) => {
    console.log('wordType', wordType);
        setOptions('wordType',wordType.value)}}      
    />
    console.log('object.key(options):', Object.keys(options));
    console.log('set options:', setOptions);
  console.log('value:', info.wordType);
  let chosenType = info.wordType || 'verb';
  for(let title in options[chosenType]) {
    console.log('options', options);
    if (options[chosenType][title].length > 2){
      optionListForm.push(
        <div key={title} className="option">
          <div className="option-title">{title}</div>
          <div className="option-menu">
            <Dropdown
              value={info[title]}
              options={options[chosenType][title]}
              onChange={(tense) => {setOptions(title,tense.value)}}
            />
          </div>
        </div>)
    } else {
      optionBulletForm.push(<Dropdown key={title} options={options[chosenType][title]} setOptions={setOptions} 
      title={title}
      onChange={(wordTypeForm) => {setOptions(title, wordTypeForm.value)}}
      value={info[title]}
      />);
      console.log('options chosen type', options[chosenType])
    }}
  let languageButton = [];
  for(let i = 0; i < languageList.length; i++){
    let styleName = 'languages';
    if(selectedLanguage === languageList[i]){
      styleName = 'selectedlanguage';
      languageButton.push(<span><button key={i} className={styleName} onClick={() => {changeLanguage(languageList[i]);}}>{languageList[i]}</button></span>)
       
    } else {
    languageButton.push(<button key={i} className={styleName} onClick={() => {changeLanguage(languageList[i]);}}>{languageList[i]}</button>)
    }  
  }
  return (

    <div className="App">
      <div className="title-container">
        <span className="title" >CONJUGATOR</span>
      </div>
      <div className='content-container'>
        <p className="instruction-text">Select Your Language!</p>
        {languageButton}
        <span className="optionSpan">{wordTypeForm}</span>
        <span className="optionSpan">{optionBulletForm}</span> <span className="optionSpan">{optionListForm}</span>
        
        <p className="instruction-text">Type Your Word</p>
        <div className="wrapper">
          <input 
            className="input-box" type="text" name="word" placeholder="Please input your word!" value={word} onChange={(e) => {
            changeWord(e.target.value);
            }} 
          />
          <button onClick={() => {submit()}} className="conjugate-button">Conjugate!</button>
        </div>  
        <input className="output-box" type="textbox" name="output" value={conjugatedWord} />
      </div>  
    </div>
  );
};

export default App;
