import React from 'react'
import { Link, Redirect } from 'react-router-dom';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      imageFile: null,
      errors: this.props.errors,
    }
  }

  renderErrors() {
    let error = []

    
  }
}