import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions'
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    pin: state.entities.pins[ownProps.match.params.pinId],
    currentUser: state.session.currentUser,
    user: Object.values(state.entities.users)[0],
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow)