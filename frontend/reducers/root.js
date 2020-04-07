import { combineReducers } from 'redux';
import sessionReducer from './session'
import entitiesReducer from './entities'
import errorsReducer from './errors'

const RootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
})

export default RootReducer;