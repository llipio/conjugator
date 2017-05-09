import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App';
import appReducers from './reducers';
import { generateHomeContainer } from './containers/Home';
import './style/index.css';

let store = createStore(appReducers)

const Home = generateHomeContainer(App);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
