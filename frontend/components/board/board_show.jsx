import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PinIndexItem from '../pin/pin_index_item'


class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId)
    .then(action => {
      return (
        this.setState( action.board ))
      })
      .then(() => this.props.fetchUser(this.props.userId));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchUser(this.props.match.params.userId)
    }
  }

  render() {

    const { user, board, boardId } = this.props;

    if (!user) return <div></div>;

    const boardPins = Object.values(board)[0].pins.map((pin, idx) => {
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
          <div className='profile-info-name'>{Object.values(board)[0].title}</div>
          <div className='board-show-details'>{Object.values(board)[0].pins.length} Pins</div>
          <div className='board-show-details'>{Object.values(board)[0].description}</div>
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