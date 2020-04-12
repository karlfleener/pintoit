import * as BoardApitUtil from '../util/board_api_util';

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

export const fetchAllBoards = () => dispatch => BoardApitUtil.fetchAllBoards()
  .then(boards => dispatch(receiveAllBoards(boards)), 
  err => dipsatch(receiveBoardErrors(err.responseJSON)))

export const fetchBoard = boardId => dispatch => BoardApitUtil.fetchBoard(boardId)
  .then(board => dispatch(receiveBoard(board)), 
  err => dispatch(receiveBoardErrors(err.responseJSON)))

export const createBoard = board => dispatch => BoardApitUtil.createBoard(board)
  .then(board => dispatch(receiveBoard(board)),
  err => dipsatch(receiveBoardErrors(err.responseJSON)))

export const updateBoard = board => dispatch => BoardApitUtil.updateBoard(board)
  .then(board => dispatch(receiveBoard(board)),
  err => dispatch(receiveBoardErrors(err.responseJSON)))

export const deleteBoard = boardId => dispatch => BoardApitUtil.deleteBoard(boardId)
  .then(() => dispatch(removeBoard()))