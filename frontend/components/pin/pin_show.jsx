import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class PinShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = !this.props.pin ? { title: '' } : this.props.pin;
    // this.goBack = this.goBack.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId)
    .then(pin => this.setState(this.props.pin))
  }

  // goBack() {
  //   debugger
  //   this.props.history.goBack()
  // }

  render() {
    debugger
    // console.log(this.props)
    let editPin; 
    if (!this.props.pin) {
      return <div></div>
    } else {
      editPin = Number(this.props.currentUser.id) === this.props.pin.creator_id ? 'show-edit' : '';
    }
    
    return (
      <div>
        <div onClick={() => this.props.history.goBack()}><i id='show-pin-arrow' className="fas fa-arrow-left"></i></div>
        <div className="show-pin-container">
          <div className="show-pin-box">
            <div className='show-pin-image-container'>
              <img src={this.state.imageUrl} alt={this.state.title}/>
            </div>

            <div className='show-pin-info-container'>

              <header className="show-pin-header">
                <div onClick={() => this.props.openModal('edit')}><i className={`fas fa-pen ${editPin}`}></i></div>
                <div className="show-pin-header-right">
                  <button className='show-pin-select'>
                    <div>Select</div>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <button className='show-pin-save'>Save</button>
                </div>
              </header>

              <div className="show-pin-info">
                <div className='show-pin-title'>{this.props.pin.title}</div>
                <div className='show-pin-description'>{this.props.pin.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PinShow);

