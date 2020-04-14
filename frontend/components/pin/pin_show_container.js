import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
  pin: state.entities.pins[ownProps.match.params.pinId],
  boards: state.entities.boards,
  currentUser: state.session.currentUser,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow)