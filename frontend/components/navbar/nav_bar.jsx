import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>{currentUser.email}</p>
      <button onClick={logout}>Log out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign up</Link>
      <Link className="btn" to="/login">Logi n</Link>
    </div>
  )

  return (
    <header>
      <h1 className="logo">Pintoit</h1>
      <div>
        {dispaly}
      </div>
    </header>
  )
}