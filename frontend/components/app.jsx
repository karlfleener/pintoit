import React from 'react';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import SignupContainer from './session/signup_containter'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
  <div>
    Pintoit
    <AuthRoute path='/signup' component={SignupContainer} />
  </div>
)

export default App;