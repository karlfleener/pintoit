import { RECEIVE_BOARD_ERRORS } from '../actions/board_actions';

const boardErrorsReducer = (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_BOARD_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default boardErrorsReducer;