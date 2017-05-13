import { connect } from 'react-redux';

const generateHomeContainer = connect(() => {
  return {
    word: 'speak',
    selectedLanguage: 'Hindi'
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
