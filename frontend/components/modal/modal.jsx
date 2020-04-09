import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_containter';
import { signup, login } from '../../util/session_api_util';


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
        default:
          return null;
        }
        return (
          <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
 

// class Modal extends React.Component {
  //   constructor(props) {
  //     super(props);
      // this.state = {login: true};
    // }
  
  //   render() {
  //     let component;
  //     let modalButton;
  //     // if (this.state.login) {
  //       component = <LoginFormContainer />;
  //       modalButton = <button className="modal-button" onClick={e => this.setState({ login: !(this.state.login) })}>Sign up</button>;
  //     // } else {
  //       // component = <SignupFormContainer />;
  //       // modalButton = <button className="modal-button" onClick={e => this.setState({ login: !(this.state.login) })}>Log in</button>;
  //     // }
  //     return (
  //       <div className="modal-background" onClick={closeModal}>
  //         <div className="modal-altbutton">{modalButton}</div>
  //         <div className="modal-child" onClick={e => e.stopPropagation()}>{component}</div>
  //       </div>
  //     );
  //   }
  // }