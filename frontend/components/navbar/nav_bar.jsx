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
      <Link className="btn" to="/login">Log in</Link>
    </div>
  )
  

  return (
    <header className='nav-container'>
      <Link to='/'>
        <div>
          <img src={window.logo} id="nav-logo" alt="Pintoit Logo"/>
        </div>
      </Link>
    
      <div className="search-bar">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input 
          type="text" 
          placeholder="Search for Animal photography" 
          id="search-input"
        />
      </div>

      <Link to="/"><div className="nav-item">Home</div></Link>
      <Link to="/following"><div className="nav-item">Following</div></Link>
      <Link to={`/`}><div className="nav-item">{currentUser}</div></Link> 
      <div className='nav-item'><i className="fas fa-comment-dots"></i></div>      
      <div className='nav-item'><i className="fas fa-bell"></i></div>  
      <button className='nav-item' onClick={logout}>Log out</button>                               
    </header>
  )
}

export default NavBar;