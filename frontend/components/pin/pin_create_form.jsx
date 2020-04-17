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
    this.removeImagePreview = this.removeImagePreview.bind(this);
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
    .then((pin) => {
      this.props.history.push(`/pins/${pin.pin.id}`)}, (err) => {
      this.setState({ errors: this.renderErrors() })
    })
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value, errors: [] })
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

  removeImagePreview() {
    this.setState({imageUrl: null, imageFile: null, errors: []});
  }

  renderErrors() {
    let error = []
    
    if (this.props.errors[0].includes("Image An image is required to create a Pin.")) {
      error.push("An image is required to create a Pin.");
      // debugger
      return error
    } else if (this.props.errors[0].includes("Title can't be blank")) {
      error.push("Title can't be blank.");
      return error
    } 
  }

  imageErrors() {
    if (this.state.errors[0] === "An image is required to create a Pin.") {
      return this.state.errors;
    }
  }
  
  titleErrors() {
    if (this.state.errors[0] === "Title can't be blank.") {
      return this.state.errors;
    }
  }
  
  render(){
    console.log(this.state);
    
    const imageOutline = this.imageErrors() ? 'image-error-outline' : '';
    const imagePreview = this.state.imageUrl ? <img src={this.state.imageUrl} alt='pin image preview'/> : null;
    const imagePreviewClass = this.state.imageUrl ? 'show' : '';
    if (!this.props.pin) 
    return (
      
      <div className='create-pin-container'>
        <div className='create-pin-form-box'>

          <header className="create-pin-header">
              <button className="create-pin-select">
                <div>Select</div>
                <i className="fas fa-chevron-down"></i>
              </button>
              <button className="create-pin-save" onClick={this.handleSubmit}>Save</button>
          </header>

          <form className='create-pin-form'>

            <div className="create-pin-form-image-container">
              <input type="file" onChange={this.handleFile} className='create-pin-form-input'/>
              <div className={`create-pin-form-image-preview ${imagePreviewClass}`}>{imagePreview}</div>
              <div className={`${imageOutline}`}></div>
              <i className="fas fa-arrow-circle-up"></i>
              <div className="click-upload">Click to upload</div>
              <i onClick={this.removeImagePreview} className={`fas fa-trash trash-${imagePreviewClass}`}></i>
              <div id='image-error'>{this.imageErrors()}</div>
            </div>

            <div className='create-pin-form-text-container'>
              <textarea className="create-pin-form-title" type="text" value={this.state.title} placeholder="Add your title" onChange={this.update('title')}/>
              <div className='title-error'>{this.titleErrors()}</div>
              <textarea className="create-pin-form-description" type="text" value={this.state.description} placeholder="Tell everyone what your Pin is about" onChange={this.update('description')}/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PinCreateForm;