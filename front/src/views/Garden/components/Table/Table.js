import React, { Component } from "react";
import './Table.css';

class Table extends Component {

  render() {

    let listHortas = this.props.hortas.map(horta => {
      return (
        <tr key={horta.id}>
          <td>{horta.name}</td>
          <td>{horta.data_fim}</td>
          <td>
            <button onClick={() => { this.props.handleEdit(horta) }} className="button is-warning is-outlined">
              <span className="icon is-small">
                <i className="far fa-edit"></i>
              </span>
            </button>
          </td>
          <td>
            <button onClick={() => { this.props.handleRemove(horta) }} className="button is-danger is-outlined">
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
        <h2 className="title">Catálogo de Hortas</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de Criação</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {listHortas}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
