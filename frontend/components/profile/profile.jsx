import React from 'react';
import { Link } from 'react-router-dom';


class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // debugger

    const { user } = this.props
    return (
      <div className='profile-container'>
        <div className='profile-header'>
          <div className="profile-edit-header">
            <div className="create-pin-board-dropdown">
              <button className='profile-create-pin-board-btn'><i className="fas fa-plus"></i></button>
              <div className='profile-create-pin-board-content'>
                <div>Create Board</div>
                <Link to='/pin-builder'>Create Pin</Link>
              </div>
            </div>
          </div>
          <div className='profile-info-header'>
            <div>users email</div>
            {/* <div>{user.email.slice(0, user.email.indexOf('@'))}</div> */}
              <div className='profile-follow-container'>
                <div>followers</div> 
                <div>/</div>
                <div>following</div>
              </div>
          </div>
          <div className='profile-boards-pins-header'>
            <button>Boards</button>
            <button>Pins</button>
          </div>
        </div>
          <div>
            <div>Users Board Index Container</div>
            <div>Users Pin Index Container</div>
          </div>
      </div>
    )
  }
}

export default Profile;