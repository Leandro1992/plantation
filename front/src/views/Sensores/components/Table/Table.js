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
          <td>
            <button onClick={() => {this.props.handleEdit(sensor)}} className="button is-warning is-outlined">
              <span className="icon is-small">
                <i className="far fa-edit"></i>
              </span>
            </button>
          </td>
          <td>
            <button onClick={() => {this.props.handleRemove(sensor)}} className="button is-danger is-outlined">
              <span className="icon is-small">
                <i className="fas fa-times"></i>
              </span>
            </button>
          </td>
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
              <th>Editar</th>
              <th>Excluir</th>
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
