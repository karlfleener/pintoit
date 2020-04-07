import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup-demo">
      <Link to="/login">Log in</Link>
      {/* &nbsp;or&nbsp; */}
      <Link to="/signup">Sign up</Link>
      {/* &nbsp;or&nbsp; */}
      <Link to="/">Demo user</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
