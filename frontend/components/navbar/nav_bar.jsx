import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

  return (
    <div className='nav-container'>

      <Link to='/'><img src={window.logo} className="nav-logo" alt="Pintoit Logo"/></Link>

      <nav>

        <Link to="/"><div className="nav-item home">Home</div></Link>
        <Link to="/following"><div className="nav-item following">Following</div></Link>
        <div className="search-bar">
          <input 
            className="search-bar-input"
            type="text" 
            placeholder="Search for Animal photography" 
          />
          <i className="fas fa-search" aria-hidden="true"></i>
        </div>
        <div className='nav-item notification'><i className="fas fa-bell"></i></div>  
        <div className='nav-item inbox'><i className="fas fa-comment-dots"></i></div>      
        <Link to={`/${currentUser.email.slice(0, currentUser.email.indexOf('@'))}`}><div className="nav-item profile">{currentUser.email.slice(0, currentUser.email.indexOf('@'))}</div></Link> 
        <div><button className='nav-item logout-button' onClick={logout}>Log out</button></div>   
      
      </nav> 

    </div>
  )
}

export default NavBar;