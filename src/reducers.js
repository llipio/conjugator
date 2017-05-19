import { combineReducers } from 'redux';

const appState = (state = {
  word: '',
  selectedLanguage: ''}, action) => {
    switch (action.type) {
      case 'CHANGE_LANGUAGE':
        return Object.assign({}, state, { selectedLanguage: action.language });
      case 'CHANGE_WORD':
        return Object.assign({}, state, { word: action.word });
      case 'SUBMIT':
        return state;
      default:
        return state;
    }
  };

const appReducers = combineReducers({
  appState,
});

export default appReducers;

