import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import ProfileBoardIndex from './board_index';

const mapStateToProps = (state, ownProps) => {
  debugger
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


// import { connect } from 'react-redux';
// import { fetchAllBoards,fetchAllUsersBoards, updateBoard, deleteBoard } from '../../actions/board_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';
// import BoardIndex from './board_index'

// const mapStateToProps = state => {
//   debugger
//   return {
//   boards: Object.values(state.entities.boards)
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   fetchAllBoards: () => dispatch(fetchAllBoards()),
//   // fetchAllUsersBoards: userId => dispatch(fetchAllUsersBoards(userId)),
//   updateBoard: board => dispatch(updateBoard(board)),
//   deleteBoard: boardId => dispatch(deleteBoard(boardId)),
//   // openModal: () => dispatch(openModal('show')),
//   // closeMOdal: () => dispatch(closeModal())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
