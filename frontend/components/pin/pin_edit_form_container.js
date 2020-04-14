import { connect } from 'react-redux';
import { updatePin } from '../../actions/pin_actions';
import EditPinForm from './pin_edit_form';

const mapStateToProps = (state, ownProps) => ({
  pin: state.entities.pins[ownProps.match.params.pinId],
  errors: Object.values(errors.pins)
})

const mapDispatchToProps = dispatch => ({
  updatePin: pin => dispatch(updatePin(pin))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm)