import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PinIndexItem from '../pin/pin_index_item'


class BoardShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // debugger
    this.props.fetchUser(this.props.userId)
    this.props.fetchBoard(this.props.boardId)
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchUser(this.props.match.params.userId)
    }
  }

  render() {

    // debugger
    const { user, board, boardId } = this.props;

    if (!user) return <div></div>;

    const boardPins = board[boardId].pins.map((pin, idx) => {
      return <PinIndexItem key={idx} pin={pin} />
    })

    return (
      <div className='profile-container'>

        <div className="profile-edit-header-bar"></div>

        <div className='profile-create-header'>

          <div className="profile-create-pin-board-dropdown">
            <button className='profile-create-pin-board-btn'><i className="fas fa-plus"></i></button>
            <div className='profile-create-pin-board-content'>
              <Link to='/pin-builder'><div>Create Pin</div></Link>
            </div>
            <div className='profile-create-hover'></div>
          </div>

          <div onClick={() => this.props.openModal('edit-board')}><i className={`fas fa-pen board-edit`}></i></div>
        </div>
        
        <div className='profile-info-header'>
          <div className='profile-info-name'>{board[boardId].title}</div>
          <div className='board-show-num-pins'>{board[boardId].pins.length} Pins</div>
            {/* <div className='profile-follow-container'>
              <div># followers</div> 
              <div>/</div>
              <div># following</div>
            </div> */}
        </div>

        <div className='profile-pin-index-container'>
          {boardPins}
        </div>
      </div>
    )
  }
}

export default BoardShow;