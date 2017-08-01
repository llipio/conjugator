import React from 'react';
import '../style/App.css';
import '../style/ReactDropdown.css';
import Dropdown from 'react-dropdown';
import titleUnderline from '../assets/underline-text1.png';

const App = ({wordType,options, selectedLanguage, changeLanguage, word, changeWord, languageList, submit, setOptions, info, conjugatedWord}) => {
  let optionListForm = [];
  let optionBulletForm = [];
  let nativeLanguage = {
    'Korean': '한국어',
    'Hindi': 'हिंदी',
    'French': 'Français',
    'Vietnamese': 'Tiếng Việt'
  };
  let wordTypeForm =
    <div className="option">
      <div className="option-title">Wordtype</div>
        <div className="option-menu">
          <Dropdown
            options={Object.keys(options)}
            displayTitle='Word Type'
            value={info.wordType}
            onChange={(wordType) => {
            setOptions('wordType',wordType.value)}}
          />
        </div>
    </div>;
  let chosenType = info.wordType || 'verb';
  Object.keys(options[chosenType]).forEach( (title) => {
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
      optionBulletForm.push(
      <div key={title} className="option">
        <div className="option-title">{title}</div>
        <div className="option-menu">
          <Dropdown 
            key={title} 
            options={options[chosenType][title]} 
            setOptions={setOptions} 
            title={title}
            onChange={(wordTypeForm) => {setOptions(title, wordTypeForm.value)}}
            value={info[title]}
          />
        </div>
      </div>)
      ;
    }});
  let languageButton = [];
  let nativeBackground = '';
  languageButton = languageList.map( (language, i) => {
    let styleName = 'languages';
    let textClass = '';
    if(selectedLanguage === language){
      nativeBackground = nativeLanguage[language];
      styleName = 'selectedlanguage';
      textClass = 'nativeText';
    }
    return(
      <button
        key={i}
        className={styleName}
        onClick={() => {changeLanguage(language)}}>
        <div className={textClass}>{nativeLanguage[language]}</div>
        <div>{language}</div>
      </button>)
  });
  const handleKeyPress = (event) => {
    if(event.key == "Enter"){
      submit();
    }
  };
  return (
    <div className="App">
      <div className="background-text" style={{fontSize: Math.max(95/nativeBackground.length, 20) +'vw' }}>{nativeBackground}</div>
      <div className='content-container'>
        <div className="title-container">
          <span className="title">CONJUGATOR</span>
          <img className="titleUnderline" src={titleUnderline}/>
        </div>
        <p className="instruction-text">Choose Your Language!</p>
        <div className="language-container">
          {languageButton}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">{wordTypeForm}</div>
            <div className="col-md-4">{optionBulletForm}</div>
            <div className="col-md-4">{optionListForm}</div>
          </div>
        </div>
        <div className="text-container">
          <div className="wrapper">
            <input
              className="input-box"
              type="text"
              name="word"
              placeholder="Please input your word!"
              value={word}
              onChange={(e) => {changeWord(e.target.value);
              }}
              onKeyPress={(e) => {handleKeyPress(e)}}
            />
            <button
              type="button" onClick={submit} className="btn btn-xs">Conjugate!</button>
          </div>
          <input className="output-box" type="textbox" name="output" value={conjugatedWord}/>
        </div>
      </div>
    </div>
  );
};

export default App;
