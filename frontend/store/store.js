import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import RootReducer from '../reducers/root_reducer';

// const configureStore = (preloadedState = {}) => (
//   createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
// );

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) =>
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );

export default configureStore;