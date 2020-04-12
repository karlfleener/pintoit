import React from 'react'
import { Link, Redirect } from 'react-router-dom';

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pin: this.props.pin,
      // errors: this.props.errors,
    }
    
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPin(this.state)
    .then(null, (err) => {
      this.setState({ errors :this.renderErrors() })
    })
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }



  // renderErrors() {
  //   let error = []
    
  //   if (this.state.imageFile === null) {
  //     error.push("An image is required to create a Pin");
  //     return error
  //   };
  // }

  // imageErrors() {
  //   if (this.state.errors[0] === "The password you entered is incorrect. Try again") {
  //     return this.state.errors;
  //   }
  // }
  
  
  render(){
    // const imageOutline = this.imageErrors() ? 'error-outline' : '';

    return (
      <body>
        <div className='create-pin-container'>
          <div className='create-pin-form-box'>
            <header className="create-pin-header">
              <div>
                <button className="create-pin-select">Select</button>
                <button className="create-pin-save" onClick={this.handleSubmit}>Save</button>
              </div>
            </header>
            <form onSubmit={this.handleSubmit} className='create-pin-form'>
              <div className="create-pin-form-image-container">
                <div><i class="fas fa-arrow-circle-up"></i></div>
                <div className={``}>Drap and drop or click to upload</div>
                {/* <div className='error'>{this.imageErrors()}</div> */}
              </div>
              <div className='create-pin-form-text-container'>
                <textarea className="create-pin-form-title" type="text" value={this.state.title} placeholder="Add your title" onChange={this.update('title')}/>
                <textarea className="create-pin-form-description" type="text" value={this.state.description} placeholder="Tell everyone what your Pin is about" onChange={this.update('description')}/>
                {/* <input type="text" value={this.state.title} placeholder="Add a destination link"/> */}
            </div>
            </form>
          </div>
        </div>
      </body>
    )
  }
}

export default PinCreateForm;