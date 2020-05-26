import { RECEIVE_ALL_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions'

const boardsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      return Object.assign({}, { [action.board.id]: action.board });
    case REMOVE_BOARD:
      delete newState[action.boardId];
      return newState; 
    default:
      return state;
  }
}

export default boardsReducer;