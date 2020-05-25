import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class PinShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = !this.props.pin ? { title: '' } : this.props.pin;
  }
  
  componentDidMount() {
    // debugger
    // this.props.fetchUser(this.props.currentUser.id);
    this.props.fetchPin(this.props.match.params.pinId)
    .then(pin => this.setState(this.props.pin))
    .then(pin => this.props.fetchBoard(this.props.pin.board_id))
    .then(pin => this.props.fetchUser(this.props.pin.creator_id))
  }

  handleSelect(e) {
    e.preventDefault();
    let selected = document.getElementsByClassName("show-pin-select")[0];
    let board = e.currentTarget;
    selected.innerText = board.innerText;
  }

  render() {
    // debugger
    // console.log(this.props)
    let editPin; 
    if (!this.props.pin) {
      return <div></div>;
    } else {
      editPin = Number(this.props.currentUser.id) === this.props.pin.creator_id ? 'show-edit' : '';
    }

    if (!this.props.user) return <div></div>;
    if (!this.props.board) return <div></div>;

    const { user } = this.props
    const boardTitles = user.boards.map((board, idx) => {
      return <div className="show-pin-select-board-title" onClick={this.handleSelect} key={Object.values(board)[0].id}>{Object.values(board)[0].title}</div>;
    })

    debugger
    
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
                <div onClick={() => this.props.openModal('edit-pin')}><i className={`fas fa-pen ${editPin}`}></i></div>
        
                <div className="show-pin-header-right">

                  <div className="show-pin-board-dropdown">
                    <button className='show-pin-select'>Select</button>
                    <i className="fas fa-chevron-down select-arrow"></i>
                    <div className='show-pin-select-content'>
                        { boardTitles }
                    </div>
                  </div>

                  <button className='show-pin-save'>Save</button>
                </div>
              </header>

              <div className="show-pin-info">
                <div className='show-pin-title'>{this.props.pin.title}</div>
                <div className='show-pin-description'>{this.props.pin.description}</div>
                <div className='show-pin-board'><strong>{user.email.slice(0, user.email.indexOf('@'))}</strong> saved to <strong>{this.props.board.title}</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PinShow);

