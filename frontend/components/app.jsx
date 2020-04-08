import React from 'react';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignupContainer from './session/signup_form_containter';
import LoginContainer from './session/login_form_container';
import NavBarContainer from './navbar/nav_bar_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    {/* <AuthRoute exact path='/signup' component={SignupContainer} />
    <AuthRoute exact path='/login' component={LoginContainer} /> */}
    <ProtectedRoute  path='/' component={NavBarContainer}/>
  </div>
)

export default App;