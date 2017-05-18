import { connect } from 'react-redux';

const generateHomeContainer = connect((state) => {
  return {
    word: state.appState.word,
    selectedLanguage: state.appState.selectedLanguage
  };
}, (dispatch) => {
  return {
    changeLanguage: (language) => {
      dispatch({ type: 'CHANGE_LANGUAGE', language });
    },
    submit: () => {
      dispatch({ type: 'SUBMIT' });
    },
    changeWord: (word) => {
      dispatch({ type: 'CHANGE_WORD', word });
    }
  };
});

export { generateHomeContainer };
