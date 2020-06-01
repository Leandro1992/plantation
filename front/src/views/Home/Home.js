import React, { Component } from "react";
import './Home.css';
import NavBar from '../../components/NavBar/';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import Chart from 'react-google-charts';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      data: [],
      name: ""
    };
    this.getStatus = this.getStatus.bind(this);
    this.graphList = this.graphList.bind(this);
  }

  getStatus(item) {
    if (item) {
      axios.get(`http://localhost:3000/getStatus?token=${item.token}`).then(response => {
        if (response.data.data) {
          this.setState({ data: response.data.data, active: true, name: item.nome })
        } else {
          this.setState({ active: false })
        }
      }).catch(err => console.log(err));
    }
  }

  graphList() {
    if (this.state.active) {
      return (
        <div className="Home">
          <div className="columns">
            <div className="column enviroment-char">
              <span className="chart-title">Temperatura </span>
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={this.state.data.temperatura}
                options={{
                  legend: 'none',
                  hAxis: {
                    format: 'HH:mm',
                    title: 'Tempo',
                  },
                  vAxis: {
                    title: 'Dados',
                  },
                  series: {
                    0: { curveType: 'function', color: 'yellowgreen' },
                  },
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            </div>

            <div className="column enviroment-char">
              <span className="chart-title">Umidade</span>
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={this.state.data.umidade}
                options={{
                  legend: 'none',
                  hAxis: {
                    format: 'HH:mm',
                    title: 'Tempo',
                  },
                  vAxis: {
                    title: 'Dados',
                  },
                  series: {
                    0: { curveType: 'function' },
                  },
                }}
                rootProps={{ 'data-testid': '2' }}
              />
            </div>
          </div>

          <div className="columns">
            <div className="column enviroment-char">
              <span className="chart-title">Luminosidade</span>
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={this.state.data.luminosidade}
                legendToggle
                options={{
                  legend: 'none',
                  hAxis: {
                    title: 'Tempo',
                  },
                  vAxis: {
                    title: 'Dados',
                  },
                  series: {
                    0: { color: '#e2431e' },
                  },
                }}
                rootProps={{ 'data-testid': '3' }}
              />
            </div>
            <div className="column enviroment-char">
              <span className="chart-title">Umidade do Solo</span>
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={this.state.data.solo}
                legendToggle
                options={{
                  legend: 'none',
                  hAxis: {
                    title: 'Tempo',
                  },
                  vAxis: {
                    title: 'Dados',
                  },
                  series: {
                    0: { color: '#e2431e' },
                  },
                }}
                rootProps={{ 'data-testid': '3' }}
              />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="columns">
          <div className="column">
            <span className="empty-title">Selecione um device no menu</span>
          </div>
        </div>
      )
    }

  }

  render() {
    return (
      <div>
        <NavBar name="Home" />
        <div className="columns">
          <div className="column">
            <Sidebar selected={this.getStatus} />
          </div>
          <div className="column is-four-fifths">
            {this.graphList()}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
