import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class LoginForm extends React.Component {
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
    this.props.login(this.state)
    .then(null, (err) => {
      this.setState({ errors: this.renderErrors() })
    })
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({ email: 'userdemo@gmail.com', password: 'password123' })
  }

  renderErrors() {
    let error = [];

    function emailIsValid(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    if (this.props.errors.includes("Invalid email or password")) {

      if (this.state.email === '') {
        error.push("You missed a spot! Don’t forget to add your email.");
        return error;
      } else if (!emailIsValid(this.state.email)) {
        error.push("Hmm...that doesn't look like an email address.");
        return error;
      } else {
        error.push("The password you entered is incorrect. Try again");
        return error;
      } 
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
    if (this.state.errors[0] === "The password you entered is incorrect. Try again") {
      return this.state.errors;
    }
  }

  render() {
    const emailOutline = this.emailErrors() ? 'error-outline' : '';
    const passwordOutline = this.passwordErrors() ? 'error-outline' : '';

    return (
      <div className='session-container'>
        <Link to='/signup'><button className="session-side-button">Sign up</button></Link>

        <div className='session-form-container'>

          <div className='session-form-box'>
            <form onSubmit={this.handleSubmit} className='session-form'>
              <header>
                <img src={window.logo} alt="Pintoit Logo" className='session-form-logo'/> 
                <h1>Welcome to Pintoit</h1>
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
                className="session-form-submit"
                type="submit"
                value="Log in"
              />

              <button onClick={this.demoLogin} className="demo-login">Demo Log in</button>


              <div className='terms-of-service'> By continuing, you agree to Pintoit's <a>Terms of Service</a>, <a>Privacy Policy</a></div>

              <Link to='/signup'><div className='session-form-other-form'>Not on Pintoit yet? Sign up</div></Link>

            </form>
          </div>

        </div>
        <footer className='footer'>
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
        </footer>
      </div>
    );
  }
};

export default LoginForm;