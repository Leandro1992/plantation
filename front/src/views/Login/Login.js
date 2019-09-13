import React, { Component } from "react";
import './Login.css';

class Login extends Component {

  login(){
    window.location.href = "/home";
  }

  render() {
    return (
      <div className="Login">
        <h1>Plantation Control</h1>
        <div className="user-login">
          <p>User</p>
          <input className="input" type="text" />
          <p>Password</p>
          <input className="input" type="password" />
          <button onClick={this.login} className="button is-light button-login">Login</button>
        </div>
      </div>
    )
  }
}

export default Login;
