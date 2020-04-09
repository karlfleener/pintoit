import React from 'react';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignupFormContainer from './session/signup_form_containter';
import LoginFormContainer from './session/login_form_container';
import NavBarContainer from './navbar/nav_bar_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <ProtectedRoute path='/' component={NavBarContainer}/>
    <Modal />
    {/* <AuthRoute path='/signup' component={SignupFormContainer} /> */}
    {/* <AuthRoute path='/login' component={LoginFormContainer} /> */}
  </div>
)

export default App;