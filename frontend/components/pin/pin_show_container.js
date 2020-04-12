import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import PinShow from './pin_show';

const mapStateToProps = ({ errors }) => ({
  pin: {
    title: '',
    description: '',
    imageFile: null,
  },
  errors: Object.values(errors.pins)
})

const mapDispatchToProps = dispatch => ({
  fetchPin: pinId => dispatch(fetchPin(pinId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow)