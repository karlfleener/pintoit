import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

  return (
    <div className='nav-container'>
      <nav className="nav-menu">
        <div className="nav-logo">
          <Link to="/"><img src={window.logo} alt="Pintoit Logo" className="logo" /></Link>
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
        <li className='nav-item inbox'><i className="fas fa-comment-dots"></i></li> */}
        <div className="about-links">
          <a href='https://www.linkedin.com/in/karlfleener/' target="_blank" className="nav-item"><i className="fab fa-linkedin" id="about"></i></a>
          <a href='https://angel.co/u/karlfleener' target="_blank" className="nav-item"><i className="fab fa-angellist" id="about"></i></a>
          <a href='https://github.com/karlfleener' target="_blank" className="nav-item"><i className="fab fa-github" id="about"></i></a>
          <a href='https://karlfleener.github.io/' target="_blank" className="nav-item"><i className="fas fa-user" id="about"></i></a>
        </div>
        <div className="nav-links">
          <Link to="/"><div className="nav-item">Home</div></Link>
          <Link to={`/users/${currentUser.id}/boards`}><div className="nav-item">{currentUser.email.slice(0, currentUser.email.indexOf('@'))}</div></Link> 
          <div className='nav-item' onClick={logout}>Log out</div>
        </div>   
      </nav> 
      <div className="create-pin-dropdown">
        <div className='create-pin-hover'></div>
        <button className='create-pin-btn'>
          <i className="fas fa-plus"></i>
        </button>
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