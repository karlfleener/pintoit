import React from 'react';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import SignupContainer from './session/signup_containter'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import GreetingContainer from './greeting/greeting_container'

const App = () => (
  <div>
    Pintoit Logo
    <AuthRoute exact path='/signup' component={SignupContainer} />
    {/* <AuthRoute exact path='/login' component={LoginContainer} /> */}
    <GreetingContainer />
  </div>
)

export default App;