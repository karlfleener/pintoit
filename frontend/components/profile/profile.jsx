import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from '../pin/pin_index_item'


class BoardShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // debugger
    this.props.fetchUser(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchUser(this.props.match.params.userId)
    }
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    const { user } = this.props;
    debugger

    if (!user) return <div></div>; 

    const userPins = user.pins.map((pin,idx )=> {
      // debugger
      return <PinIndexItem key={idx} pin={Object.values(pin)[0]} />
    })
    
    // debugger
    return (
      <div className='profile-container'>

        <div className="profile-edit-header-bar"></div>
        
        <div className='profile-create-header'>
          <div className="profile-create-pin-board-dropdown">
            <button className='profile-create-pin-board-btn'><i className="fas fa-plus"></i></button>
            <div className='profile-create-pin-board-content'>
              <div>Create Board</div>
            <Link to='/pin-builder'><div>Create Pin</div></Link>
            </div>
            <div className='profile-create-hover'></div>
          </div>
        </div>

        <div className='profile-info-header'>
          <div className='profile-info-name'>{user.email.slice(0, user.email.indexOf('@'))}</div>
            {/* <div className='profile-follow-container'>
              <div># followers</div> 
              <div>/</div>
              <div># following</div>
            </div> */}
        </div>

        <div className='profile-boards-pins-header'>
        {/* <Link to='/users/3'>user3</Link> */}
          <Link to={`/users/${user.id}/boards`}><button>Boards</button></Link>
          <Link to={`/users/${user.id}/pins`}><button>Pins</button></Link>
        </div>

        <div className='profile-pin-index-container'>
          {userPins}
        </div>
      </div>
    )
  }
}

export default BoardShow;