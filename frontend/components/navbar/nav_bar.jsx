import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

  return (
    <header className='nav-container'>
      <nav>
          <ul className="nav-menu">
            <Link to='/'><li><img src={window.logo} className="nav-logo" alt="Pintoit Logo" /></li></Link>
            <Link to="/"><li className="nav-item home">Home</li></Link>
            <Link to="/following"><li className="nav-item following">Following</li></Link>
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
            {/* <Link to={`/${currentUser.email.slice(0, currentUser.email.indexOf('@'))}`}> */}
            <Link to={`/users/${currentUser.id}`}>
              <li className="nav-item profile">{currentUser.email.slice(0, currentUser.email.indexOf('@'))}</li>
            </Link> 
          <li><button className='nav-item logout-button' onClick={logout}>Log out</button></li>   
          </ul>
      </nav> 
      {/* <div className="create-pin-dropdown">
        <Link to="/pin-builder">
          <button className="create-pin-button"><i className="fas fa-plus"></i></button>
        </Link>
      </div> */}
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
    </header>
  )
}

export default NavBar;