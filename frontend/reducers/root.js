import { combineReducers } from 'redux';
import sessionReducer from './session'

const RootReducer = combineReducers({
  session: sessionReducer,
})

export default RootReducer;