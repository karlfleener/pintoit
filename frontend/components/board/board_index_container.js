import { connect } from 'react-redux';
import { fetchAllBoards,fetchAllUsersBoards, updateBoard, deleteBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardIndex from './board_index'

const mapStateToProps = state => {
  debugger
  return {
  boards: Object.values(state.entities.boards)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllBoards: () => dispatch(fetchAllBoards(userId)),
  // fetchAllUsersBoards: userId => dispatch(fetchAllUsersBoards(userId)),
  updateBoard: board => dispatch(updateBoard(board)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  // openModal: () => dispatch(openModal('show')),
  // closeMOdal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
