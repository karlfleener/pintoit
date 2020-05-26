import React from 'react';
import { Link, withRouter } from 'react-router-dom'


class BoardEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.board;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value, errors: [] })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBoard(this.state)
      .then(this.props.closeModal());
  }

  deleteAllBoardPins() {
    this.props.board.pins.forEach(pin => {
      this.props.deletePin(pin.id)
    })
  }

  handleDelete(e) {
    this.deleteAllBoardPins();
    this.props.deleteBoard(this.state.id)
      .then(() => {
        this.props.history.goBack();
        this.props.closeModal();
      })
  }

  render() {

    return (
      <div className="edit-pin-container">
        <div className="edit-form-box">
          <header className='edit-pin-header'>
            <h1>Edit your board</h1>
          </header>
          <form className='edit-pin-form'>
            <div className='edit-pin-info'>
              <div className="edit-pin-info-section">
                <label>Title</label>
                <textarea className='edit-pin-info-title' type="text" value={this.state.title} placeholder={this.state.title} onChange={this.update('title')} />
              </div>
              <div className="edit-pin-info-section">
                <label>Description</label>
                <textarea className='edit-pin-info-description' placeholder="What's your board about?"
                  value={this.state.description} placeholder={this.state.description} onChange={this.update('description')}
                />
              </div>
            </div>
            {/* <div className='edit-pin-image-container'>
              <img src={this.state.imageUrl} alt={this.state.title} />
            </div> */}
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

export default withRouter(BoardEditForm);