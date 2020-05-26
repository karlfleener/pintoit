import { connect } from 'react-redux';
import { fetchBoard, updateBoard, deleteBoard, createBoard } from '../../actions/board_actions';
import { fetchPin, fetchAllPins, deletePin } from '../../actions/pin_actions';
import { closeModal } from '../../actions/modal_actions'
import BoardCreateForm from './board_create_form';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    // board: Object.values(state.entities.boards)[0],
  }
}

const mapDispatchToProps = dispatch => ({
  // fetchBoard: boardId => dispatch(fetchBoard(boardId)),
  // updateBoard: board => dispatch(updateBoard(board)),
  createBoard: board => dispatch(createBoard(board)),
  // deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  // fetchPin: pinId => dispatch(fetchPin(pinId)),
  // deletePin: pinId => dispatch(deletePin(pinId)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreateForm)