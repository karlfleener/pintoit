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
  //     <Link className="btn" to="/login">Logi n</Link>
  //   </div>
  // )

  return (
    <header className='nav-container'>
      <Link to='/'>
        <img src="" id="nav-logo" alt="Pintoit Logo"/>
      </Link>
    
      <div className="search-bar">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input 
          type="text" 
          placeholder="Search for Beautiful Creatures" 
          id="search-input"
        />
      </div>

      <Link to="/"><div className="nav-item">Home</div></Link>

    </header>
  )
}

export default NavBar;