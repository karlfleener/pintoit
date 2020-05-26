import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

const receiveAllBoards = boards => ({
  type: RECEIVE_ALL_BOARDS,
  boards 
})

const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
})

const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
})

const receiveBoardErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
})

export const fetchAllBoards = () => dispatch => BoardApiUtil.fetchAllBoards()
  .then(boards => dispatch(receiveAllBoards(boards)), 
  err => dispatch(receiveBoardErrors(err.responseJSON)))

// export const fetchAllUsersBoards = (userId) => dispatch => BoardApiUtil.fetchAllUsersBoards(userId)
//   .then(boards => dispatch(receiveAllBoards(boards)), 
//   err => dispatch(receiveBoardErrors(err.responseJSON)))

export const fetchBoard = boardId => dispatch => BoardApiUtil.fetchBoard(boardId)
  .then(board => dispatch(receiveBoard(board)), 
  err => dispatch(receiveBoardErrors(err.responseJSON)))

export const createBoard = board => dispatch => BoardApiUtil.createBoard(board)
  .then(board => dispatch(receiveBoard(board)),
  err => dispatch(receiveBoardErrors(err.responseJSON)))

export const updateBoard = board => dispatch => BoardApiUtil.updateBoard(board)
  .then(board => dispatch(receiveBoard(board)),
  err => dispatch(receiveBoardErrors(err.responseJSON)))

export const deleteBoard = boardId => dispatch => BoardApiUtil.deleteBoard(boardId)
  .then(() => dispatch(removeBoard()));

