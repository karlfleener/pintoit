import React from 'react';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignupFormContainer from './session/signup_form_containter';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './navbar/nav_bar_container';
import PinCreateFormContainer from './pin/pin_create_form_container'
import PinEditFormContainer from './pin/pin_edit_form_container';
import PinShowContainer from './pin/pin_show_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
    <ProtectedRoute path='/' component={NavBarContainer}/>
    <ProtectedRoute path='/pin-builder' component={PinCreateFormContainer} />
    <ProtectedRoute path='/pins/edit-pin' component={PinEditFormContainer} />
    <ProtectedRoute path='/pins/show' component={PinShowContainer} />
  </div>
)

export default App;