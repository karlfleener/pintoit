import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

  // const display = currentUser ? (
  //   <div>
  //     <p>{currentUser.email}</p>
  //     <button onClick={logout}>Log out</button>
  //   </div>
  // ) : (
  //   <div>
  //     <Link className="btn" to="/signup">Sign up</Link>
  //     <Link className="btn" to="/login">Log in</Link>
  //   </div>
  // )
  

  return (
    <div className='nav-container'>
      <Link to='/'><img src={window.logo} className="nav-logo" alt="Pintoit Logo"/></Link>
    
      <div className="search-bar">
        <input 
          className="search-bar-input"
          type="text" 
          placeholder="Search for Animal photography" 
        />
        <i className="fas fa-search" aria-hidden="true"></i>
      </div>

      <Link to="/"><div className="nav-item">Home</div></Link>
      <Link to="/following"><div className="nav-item">Following</div></Link>
      <Link to={`/${currentUser.email.slice(0, currentUser.email.indexOf('@'))}`}><div className="nav-item">{currentUser.email.slice(0, currentUser.email.indexOf('@'))}</div></Link> 
      <div className='nav-item'><i className="fas fa-comment-dots"></i></div>      
      <div className='nav-item'><i className="fas fa-bell"></i></div>  
      <button className='nav-item logout-button' onClick={logout}>Log out</button>                            
    </div>
  )
}

export default NavBar;