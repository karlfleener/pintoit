import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';
// import {signup, login, logout} from './actions/session_actions';
import {fetchAllPins, fetchPin, createPin, updatePin, deletePin} from './util/pin_api_util';
import {fetchAllBoards,fetchAllUsersBoards, fetchBoard, createBoard, updateBoard, deleteBoard} from './util/board_api_util';


document.addEventListener('DOMContentLoaded', () => {

  // TESTING
  // window.signup = signup;    
  // window.login = login;
  // window.logout = logout;
  window.fetchAllPins = fetchAllPins;
  window.fetchPin = fetchPin;
  window.createPin = createPin;
  window.updatePin = updatePin;
  window.deletePin = deletePin;
  window.fetchAllBoards = fetchAllBoards;
  window.fetchAllUsersBoards = fetchAllUsersBoards;
  window.fetchBoard = fetchBoard;
  window.createBoard = createBoard;
  window.updateBoard = updateBoard;
  window.deleteBoard  = deleteBoard;
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