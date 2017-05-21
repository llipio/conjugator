import { connect } from 'react-redux';

const generateHomeContainer = connect((state) => {
  return {
    word: state.appState.word,
    selectedLanguage: state.appState.selectedLanguage,
    languageList: state.appState.languageList,
    options: state.appState.options,
    info: state.appState.info,
    conjugatedWord: state.appState.conjugatedWord
  };
}, (dispatch) => {
  return {
    changeLanguage: (selectedLanguage) => {
      dispatch({ type: 'CHANGE_LANGUAGE', selectedLanguage });
    },
    submit: () => {
      dispatch({ type: 'SUBMIT' });
    },
    changeWord: (word) => {
      dispatch({ type: 'CHANGE_WORD', word });
    },
    setOptions: (languageOption, optionValue) => {
      dispatch({ type: 'SET_OPTIONS', languageOption, optionValue });
    }
  };
});

export { generateHomeContainer };
