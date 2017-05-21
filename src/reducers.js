import { combineReducers } from 'redux';
import Conjugator from 'universal-conjugator';

let languageObject = {};

const appState = (state = {
  word: '',
  selectedLanguage: '',
  languageList: Conjugator.getLanguageList(),
  options: {},
  info: {},
  conjugatedWord: '' }, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE': {
      if (action.selectedLanguage) {
        languageObject = Conjugator.create(action.selectedLanguage);
      }
      const languageOptions = languageObject.getInfoList();
      return Object.assign({}, state, { selectedLanguage: action.selectedLanguage,
        options: languageOptions });
    }
    case 'CHANGE_WORD': {
      return Object.assign({}, state, { word: action.word });
    }
    case 'SET_OPTIONS': {
      const languageOption = action.languageOption;
      const optionValue = action.optionValue;
      state.info[languageOption] = optionValue;
      return Object.assign({}, state);
    }
    case 'SUBMIT': {
      const conjugatedWord = languageObject.conjugate(state.word, state.info);
      return Object.assign({}, state, { conjugatedWord });
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

