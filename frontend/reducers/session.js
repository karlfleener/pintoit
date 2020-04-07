import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session';

const _nullUser = Object.freeze({id: null})

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user })
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
}

export default sessionReducer;
