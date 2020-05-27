import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class PinShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = !this.props.pin || !this.props.board ? 
    { pin: '', 
    board: '' } : 
    { pin: this.props.pin, 
      board: this.props.board };

    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId)
    .then(action => this.setState( {pin: action.pin} ))
    .then(() => this.props.fetchBoard(this.state.pin.board_id))
    .then(action => this.setState({ board: action.board }))
    .then(() => this.props.fetchUser(this.state.pin.creator_id))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.board.id !== this.props.pin.board_id) {
      this.props.fetchBoard(this.props.pin.board_id)
        .then(action => this.setState({ board: action.board }))
    }
  }

  handleSelect(e) {
    e.preventDefault();
    let selected = document.getElementsByClassName("show-pin-select")[0];
    let board = e.currentTarget;
    selected.innerText = board.innerText;
  }

  boardFromTitle(boardTitle) {
    let currentUserBoards = this.props.currentUser.boards
    let board = currentUserBoards.filter(board => {
       return Object.values(board)[0].title === boardTitle 
    })
    return Object.values(board[0])[0];
  }

  handleSave(e) {
    e.preventDefault();
    let pin = Object.create(this.state.pin)
    let boardTitle = document.getElementsByClassName("show-pin-select")[0].innerText;
    let board = this.boardFromTitle(boardTitle);
    pin.board_id = board.id;
    pin.creator_id = board.creator_id;
    debugger
    // const newPin = Object.create(pin)
    debugger
    // this.props.createPin(newPin)
    //   .then(() => this.props.history.goBack())
    this.props.history.goBack();
    //  if (this.state.imageFile) {
    //     formData.append('pin[image]', this.state.imageFile)
    //   }
      
      const formData = new FormData();
      formData.append('pin[title]', this.state.pin.title);
      formData.append('pin[description]', this.state.pin.description)
      formData.append('pin[creator_id]', this.props.currentUser.id)
      formData.append('pin[board_id]', board.id)
      formData.append('pin[imageFile]', this.state.pin.imageFile)
      formData.append('pin[imageUrl]', this.state.pin.imageUrl)
      formData.append('pin[errors]', this.state.pin.errors)

  }

  render() {

    let editPin; 
    if (!this.props.pin) {
      return <div></div>;
    } else {
      editPin = Number(this.props.currentUser.id) === this.props.pin.creator_id ? 'show-edit' : '';
    }

    if (!this.props.user) return <div></div>;
    if (!this.props.board) return <div></div>;

    const { user, currentUser } = this.props

    const boardTitles = currentUser.boards.map((board, idx) => {
      return <div className="show-pin-select-board-title" onClick={this.handleSelect} key={Object.values(board)[0].id}>{Object.values(board)[0].title}</div>;
    })
    
    return (
      <div>
        <div onClick={() => this.props.history.goBack()}><i id='show-pin-arrow' className="fas fa-arrow-left"></i></div>
        <div className="show-pin-container">
          <div className="show-pin-box">
            <div className='show-pin-image-container'>
              <img src={this.state.pin.imageUrl} alt={this.state.title}/>
            </div>

            <div className='show-pin-info-container'>

              <header className="show-pin-header">
                <div onClick={() => this.props.openModal('edit-pin')}><i className={`fas fa-pen ${editPin}`}></i></div>
        
                <div className="show-pin-header-right">

                  <div className="show-pin-board-dropdown">
                    <button className='show-pin-select'>Select</button>
                    <i className="fas fa-chevron-down select-arrow"></i>
                    <div className='show-pin-select-content'>
                        { boardTitles }
                    </div>
                  </div>

                  <button onClick={this.handleSave} className='show-pin-save'>Save</button>
                </div>
              </header>

              <div className="show-pin-info">
                <div className='show-pin-title'>{this.props.pin.title}</div>
                <div className='show-pin-description'>{this.props.pin.description}</div>
                <div className='show-pin-board'><strong>{user.email.slice(0, user.email.indexOf('@'))}</strong> saved to <strong>{this.state.board.title}</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PinShow);

