import { connect } from 'react-redux';

const generateHomeContainer = connect(() => {
  return {
    word: 'speak',
    selectedLanguage: 'Hindi'
  };
});

export { generateHomeContainer };
