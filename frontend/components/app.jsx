import React from 'react';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_containter';

import NavBarContainer from './navbar/nav_bar_container';
import ProfileContainer from './profile/profile_container';
import ProfilePinsContainer from './profile/profile_container';
import PinShowContainer from './pin/pin_show_container';
import PinCreateFormContainer from './pin/pin_create_form_container'
import PinIndexContainer from './pin/pin_index_container';
import BoardIndexContainer from './board/board_index_container'
import BoardShowContainer from './board/board_show_container'

import Modal from './modal/modal';

const App = () => (
  <div className="app">
    <Modal />

    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />

    <ProtectedRoute path='/' component={NavBarContainer}/>
  
  <Switch>
    <ProtectedRoute exact path='/users/:userId' component={ProfileContainer} />
    <ProtectedRoute exact path='/users/:userId/pins' component={ProfilePinsContainer} />
    <ProtectedRoute exact path='/users/:userId/boards' component={BoardIndexContainer} />
    <ProtectedRoute exact path='/users/:userId/boards/:boardId' component={BoardShowContainer} />
    <ProtectedRoute exact path='/pins/:pinId' component={PinShowContainer} />
    <ProtectedRoute exact path='/pin-builder' component={PinCreateFormContainer} />
    <ProtectedRoute exact path='/' component={PinIndexContainer} />
   </Switch> 
  </div>
)

export default App;