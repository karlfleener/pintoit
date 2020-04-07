import { combineReducers } from 'redux';
import sessionReducer from './session'
import usersReducer from './users'

const RootReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer,
})

export default RootReducer;