import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
const logo = require('./logo.png');

class Login extends Component {

  login() {
    axios.post('http://localhost:3000/login', {
      user: 'Fred',
      password: 'Flintstone'
    }).then(function (response) {
      console.log("ta chegando?", response)
      if (response.data.success) {
        window.location.href = "/home";
      } else {
        alert("Credenciais inválidas")
      }
    }).catch(err => alert("Erro", err));
  }

  render() {
    return (
      <div className="Login">
        <section className="hero is-primary is-fullheight">
          <div className="hero-body">
            <div className="logo">
              <img alt="logo" src={logo}/>
            </div>
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                  <form action="" className="box">
                    <div className="field">
                      <label className="label">Login</label>
                      <div className="control has-icons-left">
                        <input type="email" placeholder="e.g. bobsmith@gmail.com" className="input" required />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Senha</label>
                      <div className="control has-icons-left">
                        <input type="password" placeholder="*******" className="input" required />
                        <span className="icon is-small is-left">
                          <i className="fa fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="checkbox">
                        <input type="checkbox" />
                        Lembrar senha
                      </label>
                    </div>
                    <div className="field">
                      <button onClick={this.login} className="button is-success">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Login;
