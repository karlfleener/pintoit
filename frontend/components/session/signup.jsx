import React from 'react';
import { Link } from 'react-router-dom'

class Signup extends React.Component {
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
      });
  }

  renderErrors() {
    let blankEmailError = [];
    let invalidEmailFormatError = [];
    let emailTakenError = [];
    let passwordError = [];
    let ageError = [];

    function validEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (this.props.errors.includes("Email can't be blank")) {
      blankEmailError.push("You missed a spot! Don’t forget to add your email.");
      return blankEmailError;
    } else if (this.props.errors.includes("Email has already been taken")) {
      emailTakenError.push("Please use a different email.");
      return emailTakenError;
    } else if (!validEmail(this.state.email)) {
      invalidEmailFormatError.push("Hmm...that doesn't look like an email address.");
      return invalidEmailFormatError;
    } else if (this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
      passwordError.push("Your password is too short! You need 6+ characters.");
      return passwordError;
    } else if (this.props.errors.includes("Age can't be blank")) {
      ageError.push("Help us protect you by providing your age");
      return ageError;
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
    if (this.state.errors[0] === "Help us protect you by providing your age") {
      return this.state.errors;
    }
  }

  render() {
    const emailOutline = this.emailErrors() ? 'error-outline' : '';
    const passwordOutline = this.passwordErrors() ? 'error-outline' : '';
    const ageOutline = this.ageErrors() ? 'error-outline' : '';

    return (
     <div className='session-container'>
      <button className="session-top-button"><Link to='/login'>Log in</Link></button>
        
        <div className='session-box-container'>

          <div className='session-box'>
            <img src="" alt="Pintoit Logo"/> //Fill img src later
            <h1>Welcome to Pintoit</h1>
            <h3>Find new ideas to try</h3>

            <form onSubmit={this.handleSubmit} className='session-form'>
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

              <p>By continuing, you agree to Pintoit's <a>Terms of Service</a>, <a>Privacy Policy</a></p>

            <Link to='/login'>Already a member? Log in</Link>

            </form>
          </div>

          <div className='footer'>
            <a>About Pintoit</a>
            <a>Blog</a>
            <a>Businesses</a>
            <a>Terms of Service</a>
            <a>Privacy Policy</a>
            <a>Help</a>
            <a>iPhone App</a>
            <a>Android App</a>
            <a>Users</a>
            <a>Collections</a>
            <a>Topics</a>
          </div>
        </div>
     </div>
    );
  }
};

export default Signup;