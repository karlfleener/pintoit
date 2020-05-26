import React from 'react';
import { Link, withRouter } from 'react-router-dom'


class BoardCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      creator_id: this.props.currentUser,
      errors: this.props.errors,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value, errors: [] })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state)
      .then(this.props.closeModal());
  }

  render() {

    return (
      <div className="edit-pin-container">
        <div className="edit-form-box">
          <header className='edit-pin-header'>
            <h1>Create board</h1>
          </header>
          <form className='edit-pin-form'>
            <div className='edit-pin-info'>
              <div className="edit-pin-info-section">
                <label>Title</label>
                <textarea className='edit-pin-info-title' type="text" value={this.state.title} placeholder="Add your Title" onChange={this.update('title')} />
              </div>
              <div className="edit-pin-info-section">
                <label>Description</label>
                <textarea className='edit-pin-info-description' placeholder="What's your board about?"
                  value={this.state.description} placeholder="What's your board about?" onChange={this.update('description')}
                />
              </div>
            </div>
            {/* <div className='edit-pin-image-container'>
              <img src={this.state.imageUrl} alt={this.state.title} />
            </div> */}
          </form>
          <footer className="edit-pin-footer">
            <div className='edit-pin-footer-buttons'>
              <div></div>
              <div>
                <button onClick={this.props.closeModal} className='edit-pin-cancel'>Cancel</button>
                <button onClick={this.handleSubmit} className='edit-pin-save'>Create</button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default withRouter(BoardCreateForm);