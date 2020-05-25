import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class PinEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.pin;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
   }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value, errors: [] })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePin(this.state)
    .then(this.props.closeModal)
  }

  handleDelete(e) {
    this.props.deletePin(this.state.id)
      .then(() => {
        this.props.history.goBack();
        this.props.closeModal();
      })
  }

  render() {

    if (!this.props.user) return <div></div>

     let { pin, user} = this.props;
    // debugger
    let currentBoardId = pin.board_id;
    let currentBoard = user.boards.filter(board => {
      return Object.values(board)[0].id === currentBoardId
    });
    let currentBoardTitle = currentBoard[0][currentBoardId].title;

    debugger

    // debugger
    // const boardTitles = user.boards.map((board, idx) => {
    //   return <div className="show-pin-select-board-title" onClick={this.handleSelect} key={Object.values(board)[0].id}>{Object.values(board)[0].title}</div>;
    // })

    // let userBoardsArray = Object.values(allBoards).filter(board => {
    //   return board.creator_id === user.id
    // })


    return (
        <div className="edit-pin-container">
          <div className="edit-form-box">
            <header className='edit-pin-header'>
              <h1>Edit this Pin</h1>
            </header>
            <form className='edit-pin-form'>
                <div className='edit-pin-info'>
                  <div className="edit-pin-info-section">
                    <label>Title</label>
                    <textarea className='edit-pin-info-title'  type="text" value={this.state.title} placeholder={this.state.title} onChange={this.update('title')} />
                  </div>
                  <div className="edit-pin-info-section">
                    <label>Board</label>
                    <div className='edit-pin-info-button'>
                      <div>{currentBoardTitle}</div>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="edit-pin-info-section">
                    <label>Description</label>
                  <textarea className='edit-pin-info-description' placeholder='Write a note about this Pin...' 
                    value={this.state.description} placeholder={this.state.description} onChange={this.update('description')} 
                  />
                  </div>
                </div>
                <div className='edit-pin-image-container'>
                    <img src={this.state.imageUrl} alt={this.state.title}/>
                </div>
              </form>
              <footer className="edit-pin-footer">
                <div className='edit-pin-footer-buttons'>
                <button onClick={this.handleDelete} className='edit-pin-delete'>Delete</button>
                  <div>
                    <button onClick={this.props.closeModal} className='edit-pin-cancel'>Cancel</button>
                    <button onClick={this.handleSubmit} className='edit-pin-save'>Save</button>
                  </div>
                </div>
              </footer>
          </div>
        </div>
      )
    }
  }

  export default withRouter(PinEditForm);