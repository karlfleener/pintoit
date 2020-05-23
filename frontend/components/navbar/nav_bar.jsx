import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

  return (
    <div className='nav-container'>
      <nav className="nav-menu">
        <div>
          <Link to="/"><img src={window.logo} className="nav-logo" alt="Pintoit Logo" /></Link>
        </div>
        {/* <Link to="/following"><li className="nav-item following">Following</li></Link>
        <li className="search-bar">
        <input 
        className="search-bar-input"
        type="text" 
        placeholder="Search for Animal photography" 
        />
        <i className="fas fa-search" aria-hidden="true"></i>
        </li>
        <li className='nav-item notification'><i className="fas fa-bell"></i></li>  
        <li className='nav-item inbox'><i className="fas fa-comment-dots"></i></li>      
        <Link to={`/${currentUser.email.slice(0, currentUser.email.indexOf('@'))}`}> */}
        <div>
          <Link to="/"><div className="nav-item home">Home</div></Link>
          <Link to={`/users/${currentUser.id}`}><div className="nav-item profile">{currentUser.email.slice(0, currentUser.email.indexOf('@'))}</div></Link> 
          <button className='nav-item logout-button' onClick={logout}>Log out</button>
        </div>   
      </nav> 
      <div className="create-pin-dropdown">
        <div className='create-pin-hover'></div>
        <button className='create-pin-btn'><i className="fas fa-plus"></i></button>
        <div className='create-pin-content'>
          <Link to='/pin-builder'>
            <div className='create-pin'>
              <i className="fas fa-plus"></i>
              <div>Create Pin</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;