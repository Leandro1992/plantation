import React, { Component } from "react";
import './Adopt.css';

class Adopt extends Component {

  render() {
    let listSensors = Object.keys(this.props.sensors).map(sensor => {
      return (
        <tr key={this.props.sensors[sensor].token}>
          <td>{this.props.sensors[sensor].token}</td>
          <td>{this.props.sensors[sensor].date}</td>
          <td>
            <button onClick={() => { this.props.handleAdopt(this.props.sensors[sensor]) }} className="button is-warning is-outlined">
              <span className="icon is-small">
                <i className="far fa-edit"></i>
              </span>
            </button>
          </td>
        </tr>
      )
    })

    return (
      <div className="Adopt">
        <h2 className="title">Adotar sensor</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Token</th>
              <th>Última solicitação</th>
              <th>Adotar</th>
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

export default Adopt;
