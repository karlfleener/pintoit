import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions'


const mapStateToProps = ({ errors }) => ({
  user: { email: '', password: '', age: ''},
  errors: Object.values(errors.session),
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);