import React from 'react';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignupContainer from './session/signup_containter'
import LoginContainer from './session/login_container'
import NavBarContainer from './navbar/nav_bar_container'

const App = () => (
  <div>
    <ProtectedRoute  path='/' component={NavBarContainer}/>
    <AuthRoute exact path='/signup' component={SignupContainer} />
    <AuthRoute exact path='/login' component={LoginContainer} />
  </div>
)

export default App;