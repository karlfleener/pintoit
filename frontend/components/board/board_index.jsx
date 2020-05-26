import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexItem from './board_index_item'


class ProfileBoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.allBoards;
  }

  componentDidMount() {
    this.props.fetchAllBoards();
    this.props.fetchUser(this.props.userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchUser(this.props.match.params.userId)
    }

    if (Object.values(prevProps.allBoards).length !== Object.values(this.props.allBoards).length) {
      this.props.fetchAllBoards();
    }
  }


    

  render() {
    const { user, allBoards } = this.props;

    if (!user) return <div></div>;
    if (!allBoards) return <div></div>;

    let userBoardsArray = Object.values(allBoards).filter(board => {
      return board.creator_id === user.id
    })

    const userBoards = userBoardsArray.map((board, idx) => {
        return <BoardIndexItem key={idx} board={board} />
      })

    return (
      <div className='profile-container'>

        <div className="profile-edit-header-bar"></div>

        <div className='profile-create-header'>
          <div className="profile-create-pin-board-dropdown">
            <button className='profile-create-pin-board-btn'><i className="fas fa-plus"></i></button>
            <div className='profile-create-pin-board-content'>
              <div onClick={() => this.props.openModal('create-board')}>Create Board</div>
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
          <Link to={`/users/${user.id}/boards`}><button className="profile-button-boards">Boards</button></Link>
          <Link to={`/users/${user.id}/pins`}><button className="profile-button-pins">Pins</button></Link>
        </div>

        <div className='profile-board-index-container'>
          {userBoards}
        </div>
      </div>
    )
  }
}

export default ProfileBoardIndex;