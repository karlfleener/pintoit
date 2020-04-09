import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal } from '../../actions/modal_actions'

const mapStateToProps = ({ errors }) => ({
  user: { email: '', password: '' },
  errors: Object.values(errors.session)
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// const mapStateToProps = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: 'login',
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     processForm: (user) => dispatch(login(user)),
//     otherForm: (
//       <button onClick={() => dispatch(openModal('signup'))}>
//         Signup
//       </button>
//     ),
//     closeModal: () => dispatch(closeModal())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);