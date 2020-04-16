import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import PinShow from './pin_show';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
  return {
  pin: state.entities.pins[ownProps.match.params.pinId],
  boards: state.entities.boards,
  currentUser: state.session.currentUser,
}
}

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow)