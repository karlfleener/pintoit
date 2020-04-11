import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root'
import configureStore from './store/store.js'
import {signup, login, logout} from './util/session_api_util'
import {fetchAllBoards, fetchBoard, createBoard, updateBoard, deleteBoard} from './actions/board_actions'
import {fetchAllPins, fetchPin, createPin, updatePin, deletePin} from './actions/pin_actions'


document.addEventListener('DOMContentLoaded', () => {
  // TESTING
  window.signup = signup;    
  window.login = login
  window.logout = logout;
  window.fetchAllBoards = fetchAllBoards;
  window.fetchBoard = fetchBoard;
  window.createBoard = createBoard;
  window.updateBoard = updateBoard;
  window.deleteBoard  = deleteBoard;
  window.fetchAllPins = fetchAllPins;
  window.fetchPin = fetchPin;
  window.createPin = createPin;
  window.updatePin = updatePin;
  window.deletePin  = deletePin;
  // TESTING
  
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(preloadedState);
  //TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  //TESTING
  ReactDom.render(<Root store={store}/>, root)
})