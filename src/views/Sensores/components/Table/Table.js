import React, { Component } from "react";
import './Table.css';

class Table extends Component {
  render() {

    let listSensors = this.props.sensors.map(sensor => {
      return (
        <tr key={sensor.id}>
          <td>{sensor.id}</td>
          <td>{sensor.name}</td>
          <td>{sensor.local}</td>
          <td>{sensor.model}</td>
        </tr>
      )
    })

    return (
      <div>
        <h2 className="title">Catálogo de Sensores</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Local do Sensor</th>
              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            {listSensors}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
