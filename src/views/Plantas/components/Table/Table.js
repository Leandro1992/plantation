import React, { Component } from "react";
import './Table.css';

class Table extends Component {

  render() {

    let listPlants = this.props.plants.map(plant => {
      return (
        <tr key={plant.id}>
          <td>{plant.id}</td>
          <td>{plant.name}</td>
          <td>{plant.lumi}</td>
          <td>{plant.temp_min}</td>
          <td>{plant.temp_max}</td>
          <td>{plant.irrigation}</td>
          <td>{plant.crop}</td>
          <td>
            <button onClick={() => {this.props.handleEdit(plant)}} className="button is-warning is-outlined">
              <span className="icon is-small">
                <i className="far fa-edit"></i>
              </span>
            </button>
          </td>
          <td>
            <button onClick={() => {this.props.handleRemove(plant)}} className="button is-danger is-outlined">
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
        <h2 className="title">Catálogo de plantas</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Luminosidade</th>
              <th>Temp. Min.</th>
              <th>Temp. Max.</th>
              <th>Irrigação</th>
              <th>Colheita</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {listPlants}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
