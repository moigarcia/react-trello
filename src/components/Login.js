import React, { Component } from 'react'
import authService from '../components/services/AuthService'
import { Redirect, Link } from 'react-router-dom';


class Login extends Component {
  state = {
    user: {
      email: '',
      password: ''
    },
    touch: {},
    authenticated: false
  }

onSubmit = (event) => {
  event.preventDefault();
    authService.authenticate(this.state.user)
    .then(
      (user) => {
        this.setState({ authenticated: true });
      }
    )
}
handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    user: {
      ...this.state.user,
      [name]: value
    },
    
  })
}
handleBlur = (event) => {
  const { name } = event.target;
  this.setState({
    touch: {
      ...this.state.touch,
      [name]: true
    }
  })
}

render() {
  const { user } = this.state;
  if (this.state.authenticated) {
    return (<Redirect to="/" />);
  } else {
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-xs-12 col-3">
          <form onSubmit={this.onSubmit}>
            <div className="input-group mb-2">
              <input type="text" className="form-control" name="email" placeholder="Email" onChange={this.handleChange} value={user.email} onBlur={this.handleBlur} />
            </div>
            <div className="input-group mb-2">
              <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleChange} value={user.password} onBlur={this.handleBlur}/>
            </div>
            <div className="from-actions">
              <button type="submit" className="btn btn-primary btn-block">Login</button>
            </div>
          </form>
          <hr />
          <p className="text-center">Don't have an account? <Link to="/register">Sign up</Link></p>
        </div>
      </div>
    );
  }
}
}

export default Login
