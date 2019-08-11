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
