import React from 'react';
import { Link, withRouter } from 'react-router-dom'


class PinEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.pin;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
        this.props.history.push(`/`);
        this.props.closeModal();
      })
  }

  render() {
    // console.log(this.state)
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
                    <div>Board Dropdown</div>
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