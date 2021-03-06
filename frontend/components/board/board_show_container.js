import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    userId: Number(ownProps.match.params.userId),
    user: state.entities.users[Number(ownProps.match.params.userId)],
    boardId: Number(ownProps.match.params.boardId),
    board: state.entities.boards
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow)