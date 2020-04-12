import { connect } from 'react-redux';
import { updatePin } from '../../actions/pin_actions';
import EditPinForm from './pin_edit_form';

const mapStateToProps = ({ errors }) => ({
  pin: {
    title: '',
    description: '',
    imageFile: null,
  },
  errors: Object.values(errors.pins)
})

const mapDispatchToProps = dispatch => ({
  updatePin: pin => dispatch(updatePin(pin))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPinForm)