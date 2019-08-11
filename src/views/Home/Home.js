import React, { Component } from "react";
import './Home.css';
import NavBar from '../../components/NavBar/';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar  name="Home"/>
        <div className="container Home">
          <div className="columns">
            <div className="column">
              <div className="notification is-danger">
                <p className="title is-1 is-spaced"><i className="fas fa-leaf is-large"></i> 7/10</p>
                <p className="subtitle is-5">Plantações Ativas</p>
              </div>
            </div>
            <div className="column">
              <div className="notification is-info">
                <p className="title is-1 is-spaced"><i className="fas fa-microchip"></i> 50/74</p>
                <p className="subtitle is-5">Sensores Ativos</p>
              </div>
            </div>
            <div className="column">
              <div className="notification is-success">
                <p className="title is-1 is-spaced"><i className="fab fa-pagelines"></i> 253</p>
                <p className="subtitle is-5">Plantas Registradas</p>
              </div>
            </div>
            <div className="column">
              <div className="notification is-warning">
                <p className="title is-1 is-spaced"><i className="fas fa-bell"></i> 32</p>
                <p className="subtitle is-5">Notificações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
