import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      age: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({[type]: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    e.preventdefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/users'))
  }

  render() {
    return (
     <div className='session-form'>
        <h1>Welcome to Pintoit</h1>
        <h3>Find new ideas to try</h3>
       <form>
        <input 
          type="text" 
          value={this.state.email}
          onChange={this.handleInput('email')}
        />
        <input 
          type="password" 
          value={this.state.password}
          onChange={this.handleInput('password')}
        />
        <input 
          type="age" 
          value={this.state.age}
          onChange={this.handleInput('age')}
        />
        <button onClick={this.handleSubmit}>Sign up</button>
       </form>
     </div>
    );
  }
};

export default Signup;