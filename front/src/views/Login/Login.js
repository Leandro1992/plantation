import React, { Component } from "react";
import './Login.css';
import axios from 'axios';
const logo = require('./logo.png');

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: '',
      senha: ''
    };

    this.login = this.login.bind(this);
  }

  handleChangeUser = (e) =>{ 
    this.setState({user: e.target.value});
  }

  handleChangeSenha = (e) =>{ 
    this.setState({senha: e.target.value});
  }

  login() {
    if (this.state.user && this.state.senha) {
      axios.post('http://localhost:3000/login', this.state).then(function (response) {
        console.log("ta chegando?", response)
        if (response.data.success) {
          window.location.href = "/home";
        } else {
          alert("Credenciais inválidas")
        }
      }).catch(err => alert("Erro", err));
    } else {
      alert("Credenciais inválidas")
    }
  }

  render() {
    return (
      <div className="Login">
        <section className="hero is-primary is-fullheight">
          <div className="hero-body">
            <div className="logo">
              <img alt="logo" src={logo} />
            </div>
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                  <form action="" className="box">
                    <div className="field">
                      <label className="label">Login</label>
                      <div className="control has-icons-left">
                        <input type="text" placeholder="e.g. bobsmith@gmail.com" onChange={this.handleChangeUser} value={this.state.user} className="input" required />
                        <span className="icon is-small is-left">
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Senha</label>
                      <div className="control has-icons-left">
                        <input type="password" placeholder="*******" value={this.state.senha} onChange={this.handleChangeSenha} className="input" required />
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
