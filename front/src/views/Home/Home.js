import React, { Component } from "react";
import './Home.css';
import NavBar from '../../components/NavBar/';
import Box from './components/Box';
import Sidebar from './components/Sidebar';
import Map from './components/Map';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hortas: [
        {id: 1, name: "Horta 1", local: "Horta 21", devices: [{id: 1, name: "Device 01", local: "Horta 21", model: "MCU"}], isActive: true},
        {id: 2, name: "Horta 2", local: "Horta 22", devices: [{id: 1, name: "Device 02", local: "Horta 22", model: "MCU"}], isActive: false},
        {id: 3, name: "Horta 3", local: "Horta 22", devices: [{id: 1, name: "Device 03", local: "Horta 22", model: "MCU"}], isActive: false},
        {id: 4, name: "Horta 4", local: "Horta 22", devices: [{id: 1, name: "Device 04", local: "Horta 22", model: "MCU"}], isActive: false},
        {id: 5, name: "Horta 5", local: "Horta 22", devices: [{id: 1, name: "Device 05", local: "Horta 22", model: "MCU"}], isActive: false},
        {id: 6, name: "Horta 6", local: "Horta 22", devices: [{id: 1, name: "Device 06", local: "Horta 22", model: "MCU"}], isActive: false}
      ]
    };
  }

  render() {
    return (
      <div>
        <NavBar name="Home" />
        <div className="columns">
          <div className="column">
            <Sidebar hortas={this.state.hortas} />
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
              <div className="columns">
              <div className="column">
                <Map />
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
