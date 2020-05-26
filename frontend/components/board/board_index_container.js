import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import ProfileBoardIndex from './board_index';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    userId: Number(ownProps.match.params.userId),
    user: state.entities.users[Number(ownProps.match.params.userId)],
    allBoards: state.entities.boards
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchAllBoards:() => dispatch(fetchAllBoards()),
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  createBoard: board => dispatch(createBoard(board)),
  updateBoard: board => dispatch(updateBoard(board)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBoardIndex)
