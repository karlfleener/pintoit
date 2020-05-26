import { connect } from 'react-redux';
import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions'
import PinEditForm from './pin_edit_form';

const mapStateToProps = (state, ownProps) => {
  return {
    pin: Object.values(state.entities.pins)[0],
    currentUser: state.session.currentUser,
    user: Object.values(state.entities.users)[0],
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  updatePin: pin => dispatch(updatePin(pin)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PinEditForm)
