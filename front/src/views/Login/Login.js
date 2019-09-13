import React, { Component } from "react";
import './Login.css';
import axios from 'axios';

class Login extends Component {

  login(){
    axios.post('http://localhost:3001/login', {
      user: 'Fred',
      password: 'Flintstone'
    }).then(function (response) {
      if(response.data.success){
        window.location.href = "/home";
      }else{
        alert("Credenciais inválidas")
      }
    }).catch(err => alert("Erro", err));
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
