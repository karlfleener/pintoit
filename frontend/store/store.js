import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
);

// const configureStore = (preloadedState = {}) => {
//   let middleware = [thunk, logger];
//   if (process.env.NODE_ENV === 'production') {
//     middleware = [thunk];
//   }
//   return createStore(
//     RootReducer,
//     preloadedState,
//     applyMiddleware(...middleware)
//   );
// };

export default configureStore;