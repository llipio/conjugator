import { connect } from 'react-redux';

const generateHomeContainer = connect((state) => {
  return {
    name: state.appState.name
  }
}, (dispatch) => {
  return {
    changeName: () => {
      dispatch({
        type: 'NAME_CHANGE'
      });
    }
  };
});

export { generateHomeContainer };
