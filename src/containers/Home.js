import { connect } from 'react-redux';

const generateHomeContainer = connect(() => {
  return {
    word: 'speak',
    selectedLanguage: 'Hindi'
  };
}, (dispatch) => {
  return {
    changeLanguage: () => {
      dispatch({ type: 'CHANGE_LANGUAGE' });
    },
    submit: () => {
      dispatch({ type: 'SUBMIT' });
    },
    changeWord: () => {
      dispatch({ type: 'CHANGE_WORD' });
    }
  };
});

export { generateHomeContainer };
