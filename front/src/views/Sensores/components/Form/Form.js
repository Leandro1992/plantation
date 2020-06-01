import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div className="title">Novo Sensor</div>
        <div className="field">
          <label className="label">Nome</label>
          <div className="control">
            <input className="input" name="nome" value={this.props.form.nome} onChange={this.props.onChange} type="text" placeholder="Apelido do sensor" />
          </div>
        </div>
        <div className="field">
          <label className="label">Token</label>
          <div className="control">
            <input className="input" type="text" name="token" value={this.props.form.token} onChange={this.props.onChange} placeholder="Token de autenticação do equipamento" />
          </div>
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.props.onSubmit}>Cadastrar</button>
        </div>
      </div>
    );
  }
}

export default Form;
