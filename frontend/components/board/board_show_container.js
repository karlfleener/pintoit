import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.session.currentUser,
    userId: Number(ownProps.match.params.userId),
    user: state.entities.users[Number(ownProps.match.params.userId)],
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  createBoard: board => dispatch(createBoard(board)),
  updateBoard: board => dispatch(updateBoard(board)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow)