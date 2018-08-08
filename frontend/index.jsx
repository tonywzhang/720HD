import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup, logout, login} from './util/session_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  // TESTING START
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  // TESTING END



  ReactDOM.render(<Root store={store}/>, root);
});
