import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: this.props.errors
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(null, (err) => {
        this.setState({ errors: this.renderErrors() })
      });
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({ email: 'userdemo@gmail.com', password: 'password123' })
  }

  renderErrors() {
    let emptyEmailError = [];
    let invalidEmailError = [];
    let passwordError = [];

    function emailIsValid(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    if (this.props.errors.includes("Invalid email or password.")) {

      if (this.state.email === '') {
        emptyEmailError.push("You missed a spot! Don’t forget to add your email.")
        return emptyEmailError;
      } else if (!emailIsValid(this.state.email)) {
        invalidEmailError.push("Hmm...that doesn't look like an email address.")
        return invalidEmailError;
      } else { 
        passwordError.push("The password you entered is incorrect. Try again")
      } return passwordError;
    }
  }

  emailErrors() {
    if (this.state.errors[0] === "You missed a spot! Don’t forget to add your email."
      || this.state.errors[0] === "Hmm...that doesn't look like an email address.") {
      return this.state.errors;
    }
  }

  passwordErrors() {
    if (this.state.errors[0] === "The password you entered is incorrect. Try again") {
      return this.state.errors;
    }
  }

  render() {
    const emailOutline = this.emailErrors() ? 'error-outline' : '';
    const passwordOutline = this.passwordErrors() ? 'error-outline' : '';

    return (
      <div className='session-container'>
        <button id="session-side-button"><Link to='/signup'>Sign up</Link></button>

        <div className='session-form-container'>

          <div>
            <img src={window.logo} alt="Pintoit Logo" /> 
            <h1>Welcome to Pintoit</h1>

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
                className="session-form-submit"
                type="submit"
                value="Log in"
              />

              <button onClick={this.demoLogin} className="demo-login">Demo Log in</button>
            

              <p> By continuing, you agree to Pintoit's <a>Terms of Service</a>, <a>Privacy Policy</a></p>

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

export default Login;