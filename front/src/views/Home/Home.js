import React, { Component } from "react";
import './Home.css';
import NavBar from '../../components/NavBar/';
import Box from './components/Box';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import Chart from 'react-google-charts';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hortas: [
        { id: 1, name: "Horta 1", local: "Horta 21", devices: [{ id: 1, name: "Device 01", local: "Horta 21", model: "MCU" }], isActive: true },
        { id: 2, name: "Horta 2", local: "Horta 21", devices: [{ id: 1, name: "Device 01", local: "Horta 21", model: "MCU" }], isActive: true },
        { id: 3, name: "Horta 3", local: "Horta 21", devices: [{ id: 1, name: "Device 01", local: "Horta 21", model: "MCU" }], isActive: true },
      ],

      data: [],
    };

    this.getStatus = this.getStatus.bind(this);
    setInterval(this.getStatus, 10000);
  }

  getStatus() {
    axios.get('http://localhost:3000/getStatus').then(response => {
      console.log("ta chegando?", response)
      this.setState({ data: response.data.data })
      console.log(this.state.data)
    }).catch(err => console.log(err));
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
                  <Box name="Eventos registrados" info="29" icon="fas fa-bell is-large" type="notification is-danger" />
                </div>
                <div className="column">
                  <Box name="Sensores Cadastrados" info="3" icon="fas fa-microchip" type="notification is-info" />
                </div>
                <div className="column">
                  <Box name="Hortas Cadastradas" info="3" icon="fab fa-pagelines" type="notification is-success" />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.data}
                    options={{
                      hAxis: {
                        format: 'dd/MM/yyyy HH:mm',
                        title: 'Tempo',
                      },
                      vAxis: {
                        title: 'Dados',
                      },
                      series: {
                        1: { curveType: 'function' },
                      },
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
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
