import { combineReducers } from 'redux';

const names = ['song', 'yoojin', 'maricris', 'betty', 'phillip', 'manik', 'cecil', 'billma', 'manik', 'tri'];

const getRandomName = () => {
  return names[Math.floor(Math.random() * names.length)];
};

const appState = (state = {
  name: getRandomName()
}, action) => {
  switch (action.type) {
    case 'NAME_CHANGE':
      return Object.assign({}, state, { name: getRandomName() });
    default:
      return state;
  }
};

const appReducers = combineReducers({
  appState,
});

export default appReducers;

