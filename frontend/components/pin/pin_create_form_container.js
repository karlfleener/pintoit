import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';
import PinCreateForm from './pin_create_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  boards: Object.values(state.entities.boards),
  errors: Object.values(state.errors.pins),
  user: Object.values(state.entities.users)[0],
})

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin)),
  fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PinCreateForm)