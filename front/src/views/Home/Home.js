import React, { Component } from "react";
import './Home.css';
import NavBar from '../../components/NavBar/';
import Box from './components/Box';
import Sidebar from './components/Sidebar';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hortas: [
        {id: 1, name: "Horta 1", local: "Horta 21", devices: [{id: 1, name: "Device 01", local: "Horta 21", model: "MCU"}], isActive: true},
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
                Aqui vai aparecer os dados da horta quando clicar
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