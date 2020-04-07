import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root'
import configureStore from './store/store.js'
import {postUser, postSession, deleteSession} from './util/session'


document.addEventListener('DOMContentLoaded', () => {
  // TESTING
    window.postUser = postUser;
    window.postSession = postSession
    window.deleteSession = deleteSession;
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
  ReactDom.render(<Root store={store}/>, root)
})