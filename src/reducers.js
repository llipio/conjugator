import { combineReducers } from 'redux';
import Conjugator from 'universal-conjugator';

let languageObject = Conjugator.create('Korean');

const appState = (state = {
  word: '',
  selectedLanguage: 'Korean',
  languageList: Conjugator.getLanguageList(),
  options: Conjugator.create('Korean').getAllInfo(),
  info: {
    wordType: 'verb',
    formality: 'casual',
    tense: 'present'
  },
  conjugatedWord: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE': {
      console.log('state:', state);
      if (action.selectedLanguage) {
        languageObject = Conjugator.create(action.selectedLanguage);
      }
      const languageOptions = languageObject.getAllInfo();
      return Object.assign({}, state, { selectedLanguage: action.selectedLanguage,
        options: languageOptions });
    }
    case 'CHANGE_WORD': {
      return Object.assign({}, state, { word: action.word });
    }
    case 'SET_OPTIONS': {
      const languageOption = action.languageOption;
      const optionValue = action.optionValue;
      const newInfo = Object.assign({}, state.info);
      newInfo[languageOption] = optionValue;
      return Object.assign({}, state, { info: newInfo });
    }
    case 'SUBMIT': {
      const conjugatedWord = languageObject.conjugate(state.word, state.info);
      return Object.assign({}, state, { conjugatedWord });
    }
    case 'CLEAR_INPUTS': {
      const newInfo = Object.assign({}, state.info);
      Object.keys(newInfo).forEach((key) => {
        if (key !== 'wordType') {
          newInfo[key] = '';
        }
      });
      return Object.assign({}, state, { word: '', conjugatedWord: '', info: newInfo });
    }
    default: {
      return state;
    }
  }
};

const appReducers = combineReducers({
  appState,
});

export default appReducers;

