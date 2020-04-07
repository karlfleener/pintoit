import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root'
import configureStore from './store/store.js'
import {signup, login, logout} from './util/session'


document.addEventListener('DOMContentLoaded', () => {
  // TESTING
    window.signup = signup;
    window.login = login
    window.logout = logout;
  // TESTING
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    }
  }
  const store = configureStore();
  //TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  //TESTING
  ReactDom.render(<Root store={store}/>, root)
})