import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class PinShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = !this.props.pin ? { title: '' } : this.props.pin;
    // this.user = {};
    // this.userBoards = {};
  }
  
  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id)
    this.props.fetchPin(this.props.match.params.pinId)
    .then(pin => this.setState(this.props.pin));
  }

  // goBack() {
  //   debugger
  //   this.props.history.goBack()
  // }

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

    const { user } = this.props
    const boardTitles = user.boards.map((board, idx) => {
      // let boardTitles = [];
      // boardTitles.push(board.title)
      // return boardTitles
      // debugger
      return <div className="show-pin-select-board-title">{Object.values(board)[0].title}</div>;
    })

    // debugger
    
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

                  {/* <button className='show-pin-select'>
                    <div>Select</div>
                    <i className="fas fa-chevron-down"></i>
                  </button> */}

                  <div className="show-pin-board-dropdown">
                    <button className='show-pin-select'>
                      <div>Select</div>
                      <i className="fas fa-chevron-down"></i>
                    </button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PinShow);

