import React from 'react'
import { Link, Redirect } from 'react-router-dom';

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      creator_id: this.props.currentUser,
      board: '',
      imageFile: null,
      imageUrl: null,
      errors: this.props.errors,
    }
    
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description)
    formData.append('pin[errors]', this.state.errors)
    if (this.state.imageFile) {
      formData.append('pin[image]', this.state.imageFile)
    }
    this.props.createPin(formData)
    .then(
      (response => console.log(response.message)),
      (response) => console.log(response.responseJSON)
    )


    // .then(null, (err) => {
    //   this.setState({ errors :this.renderErrors() })
    // })
  }

  // handleClick(e) {

  // }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  // renderErrors() {
  //   let error = []
    
  //   if (this.state.imageFile === null) {
  //     error.push("An image is required to create a Pin");
  //     return error
  //   };
  // }

  imageErrors() {
    if (this.state.errors[0] === "An image is required to create a Pin") {
      return this.state.errors;
    }
  }
  
  
  render(){
    console.log(this.state);
    const imageOutline = this.imageErrors() ? 'error-outline' : '';
    const imagePreview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
    return (
        <div className='create-pin-container'>
          <div className='create-pin-form-box'>
            <header className="create-pin-header">
              <div>
                <button className="create-pin-select">Select</button>
                <button className="create-pin-save" onClick={this.handleSubmit}>Save</button>
              </div>
            </header>
            <form className='create-pin-form'>
              <div onClick={() => console.log("hi")} className="create-pin-form-image-container">
                <div><i className="fas fa-arrow-circle-up"></i></div>
                <div className={``}>Click to upload</div>
                <input type="file" onChange={this.handleFile} name="" id=""/>
                <div>{imagePreview}</div>
                {/* <div className='error'>{this.imageErrors()}</div> */}
              {/* <input id="media-upload-input" type="file" accept="image/bmp,image/gif,image/jpeg,image/png,image/tiff,image/webp"/> */}
              </div>
              {/* <input type="image" src={window.logo} name="image-file" onChange={e => this.onChange(e)}/> */}
              <div className='create-pin-form-text-container'>
                <textarea className="create-pin-form-title" type="text" value={this.state.title} placeholder="Add your title" onChange={this.update('title')}/>
                <textarea className="create-pin-form-description" type="text" value={this.state.description} placeholder="Tell everyone what your Pin is about" onChange={this.update('description')}/>
                {/* <input type="text" value={this.state.title} placeholder="Add a destination link"/> */}
            </div>
            </form>
          </div>
        </div>
    )
  }
}

export default PinCreateForm;