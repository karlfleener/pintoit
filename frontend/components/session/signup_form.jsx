import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      age: '',
      errors: this.props.errors
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(null, (err) => {
        this.setState({ errors: this.renderErrors() })
      })
  }

  renderErrors() {
   let error = [];

    function emailIsValid(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    if (this.props.errors[0].includes("Email can't be blank")) {
      error.push("You missed a spot! Don’t forget to add your email.");
      return error;
    } else if (!emailIsValid(this.state.email)) {
      error.push("Hmm...that doesn't look like an email address.");
      return error;
    } else if (this.props.errors[0].includes("Email has already been taken")) {
      error.push("Please use a different email.");
      return error;
    } else if (this.props.errors[0].includes("Password is too short (minimum is 6 characters)")) {
      error.push("Your password is too short! You need 6+ characters.");
      return error;
    } else if (this.props.errors[0].includes("Age can't be blank")) {
      error.push("Help us protect you by providing your age");
      return error;
    } else if (this.props.errors[0].includes("Age must be greater than 9")) {
      error.push("Please enter at least two digits.");
      return error;
    }

  }

  emailErrors() {
    if (this.state.errors[0] === "You missed a spot! Don’t forget to add your email."
      || this.state.errors[0] === "Hmm...that doesn't look like an email address."
      || this.state.errors[0] === "Please use a different email.") {
      return this.state.errors;
    }
  }

  passwordErrors() {
    if (this.state.errors[0] === "Your password is too short! You need 6+ characters.") {
      return this.state.errors;
    }
  }

  ageErrors() {
    if (this.state.errors[0] === "Help us protect you by providing your age"
      || this.state.errors[0] === "Please enter at least two digits.") {
      return this.state.errors;
    }
  }

  render() {
    const emailOutline = this.emailErrors() ? 'error-outline' : '';
    const passwordOutline = this.passwordErrors() ? 'error-outline' : '';
    const ageOutline = this.ageErrors() ? 'error-outline' : '';

    console.log(this.state)
    return (
     <div className='session-container'>
        <Link to='/login'><button className="session-side-button">Log in</button></Link>
        
        <div className='session-form-container'>

          <div className='session-form-box'>
            <form onSubmit={this.handleSubmit} className='session-form'>
              <header>
                <img src={window.logo} alt="Pintoit Logo" className='session-form-logo'/> 
                <h1>Welcome to Pintoit</h1>
                <h3>Find new ideas to try</h3>
              </header>

              <input 
                className={`session-form-input ${emailOutline}`}
                type="text" 
                value={this.state.email}
                placeholder="Email"
                onChange={this.update('email')}
                />
              <span className='error'>{this.emailErrors()}</span>

              <input 
                className={`session-form-input ${passwordOutline}`}
                type="password" 
                value={this.state.password}
                placeholder="Enter password"
                onChange={this.update('password')}
                />
              <span className='error'>{this.passwordErrors()}</span>

              <input 
                className={`session-form-input ${ageOutline}`}
                type="age" 
                value={this.state.age}
                placeholder="Age"
                onChange={this.update('age')}
              />
              <span className='error'>{this.ageErrors()}</span>

              <input 
                className='session-form-submit'
                type="submit" 
                value="Continue"
              />

              <div className='terms-of-service'>By continuing, you agree to Pintoit's <a>Terms of Service</a>, <a>Privacy Policy</a></div>

              <Link to='/login'><div className="session-form-other-form">Already a member? Log in</div></Link>

            </form>
          </div>

        </div>
        <footer className='footer'>
          <a href='https://github.com/karlfleener' target="_blank">GitHub</a>
          <a href='https://www.linkedin.com/in/karlfleener/' target="_blank">LinkedIn</a>
        </footer>
     </div>
    );
  }
};

export default SignupForm;