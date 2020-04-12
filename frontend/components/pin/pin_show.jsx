import React from 'react';
import { Link, withRouter } from 'react-router-dom'


class PinShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = '';
  }

  render() {
    return (
      <div className="show-pin-container">
        <div className="show-form-box">
          <form>
            <div className='show-pin-image-container'>
              <div>
                <div>image preview</div>
              </div>
            </div>
            <div className='show-pin-info-container'>
              <div className="show-pin-info-board">
                <label>Board</label>
                <div>Board Name</div>
              </div>
              <div className="show-pin-info-description">
                <label>Description</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Write a note about this Pin...'></textarea>
              </div>
            </div>
          </form>
          <footer className="show-pin-footer">
            <div className='show-pin-footer-items'>
              <button onClick=''>Edit</button>
              <button onClick=''>Save</button>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default PinShow;

