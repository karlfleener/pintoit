import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import PinCreateForm from './pin_create_form';

const mapStateToProps = state => {
  return {
    pin: { 
    title: '',
    description: '',
    creator_id: state.session.currentUser,
    imageFile: null,
  },
  // errors: Object.values(errors.pins)
}}

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinCreateForm)