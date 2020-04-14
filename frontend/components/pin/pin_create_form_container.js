import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import PinCreateForm from './pin_create_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  boards: Object.values(state.entities.boards),
  errors: Object.values(state.errors.pins)
})

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinCreateForm)