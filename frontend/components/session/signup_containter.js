import { connect } from 'react-redux';
import { signup } from '../../actions/session'
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);