import { connect } from 'react-redux';
import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import EditPinForm from './pin_edit_form';
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    // pin: state.entities.pins[ownProps.match.params.pinId],
    pin: Object.values(state.entities.pins)[0],
    boards: state.entities.boards,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  updatePin: pin => dispatch(updatePin(pin)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm)