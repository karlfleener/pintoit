import React from 'react';
import { Link, withRouter } from 'react-router-dom'


class PinEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = '';
  }

  render() {
    return (
        <div className="edit-pin-container">
          <div className="edit-form-box">
            <header>
              <h1>Edit this Pin</h1>
            </header>
            <form>
              <div className='edit-pin-info-container'>
                <div className="edit-pin-info-board">
                  <label>Board</label>
                  <div>Board Name</div>
                </div>
                <div className="edit-pin-info-description">
                  <label>Description</label>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Write a note about this Pin...'></textarea>
                </div>
              </div>
              <div className='edit-pin-image-container'>
                <div>
                  <div>image preview</div>
                </div>
              </div>
            </form>
            <footer className="edit-pin-footer">
              <div className='edit-pin-footer-items'>
                <button onClick=''>Delete</button>
                <button onClick=''>Cancel</button>
                <button onClick=''>Save</button>
              </div>
            </footer>
          </div>
        </div>
      )
    }
  }

  export default PinEditForm;