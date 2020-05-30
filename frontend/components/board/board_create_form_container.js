import { connect } from 'react-redux';
import { fetchBoard, updateBoard, deleteBoard, createBoard } from '../../actions/board_actions';
import { fetchPin, fetchAllPins, deletePin } from '../../actions/pin_actions';
import { closeModal } from '../../actions/modal_actions'
import BoardCreateForm from './board_create_form';

const mapStateToProps = (state, ownProps) => {
  return {
    // board: Object.values(state.entities.boards)[0],
  }
}

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreateForm)