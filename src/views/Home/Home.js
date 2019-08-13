import React, { Component } from "react";
import './Home.css';
import NavBar from '../../components/NavBar/';
import Box from './components/Box';
import Sidebar from './components/Sidebar';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar name="Home" />
        <div className="columns">
          <div className="column">
            <Sidebar />
          </div>
          <div className="column is-four-fifths">
            <div className="Home">
              <div className="columns">
                <div className="column">
                  <Box name="Plantações Ativas" info="7/10" icon="fas fa-leaf is-large" type="notification is-danger" />
                </div>
                <div className="column">
                  <Box name="Sensores Ativos" info="50/74" icon="fas fa-microchip" type="notification is-info" />
                </div>
                <div className="column">
                  <Box name="Plantas Registradas" info="253" icon="fab fa-pagelines" type="notification is-success" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
