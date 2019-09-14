import React, { Component } from "react";
import './NavBar.css';
// import logo from './brocolis.png'

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="/home">
              <p className="navbar-title">Home Garden</p>
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" href="/home">Home</a>
              <a className="navbar-item" href="/plantas">Plantas</a>
              <a className="navbar-item" href="/sensores">Sensores</a>
              <a className="navbar-item" href="https://bulma.io/">Projeto</a>
              {/* <a className="navbar-item" href="https://bulma.io/">Plantações</a> */}
              <a className="navbar-item" href="https://bulma.io/">Configurações</a>
              {/* <a className="navbar-item" href="/home">
              <figure className="image is-32x32">
                <img alt="Avatar" src="https://bulma.io/images/placeholders/32x32.png" />>
              </figure>
              </a> */}
            </div>
          </div>
        </nav>
        {/* <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {this.props.name}
              </h1>
            </div>
          </div>
        </section> */}
      </div>
    );
  }
}

export default NavBar;
