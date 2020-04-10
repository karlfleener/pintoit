import { RECEIVE_ALL_PINS, RECEIVE_PIN, REMOVE_PIN } from '../actions/pin_actions'

const pinReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_PINS:
      return Object.assign({}, state, action.pins);
    case RECEIVE_PIN:
      return Object.assign({}, state, { [action.pin.id]: action.pin });
    case REMOVE_PIN:
      delete nexState[action.pinId];
      return nexState;
    default:
      return state;
  }
}

export default pinReducer;