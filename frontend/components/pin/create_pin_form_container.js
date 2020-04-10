import { connect } from 'react-redux';
import {createPin} from '../../actions/pin_actions';
import CreatePinForm from './create_pin_form';

const mapStateToProps = ({ errors }) => ({
  pin: { 
    title: '',
    description: '',
    imageFile: null,
  },
  errors: Object.values.apply(errors.pins)
})

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm)