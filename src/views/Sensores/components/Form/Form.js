import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div className="title">Cadastro de Sensores</div>
        <div className="field">
          <label className="label">ID</label>
          <div className="control">
            <input className="input" name="id" value={this.props.form.id} onChange={this.props.onChange} type="text" placeholder="indentificador" />
          </div>
        </div>
        <div className="field">
          <label className="label">Nome</label>
          <div className="control">
            <input className="input" name="name" value={this.props.form.name} onChange={this.props.onChange} type="text" placeholder="Apelido do sensor" />
          </div>
        </div>
        <div className="field">
          <label className="label">Local</label>
          <div className="control">
            <input className="input" type="text" name="local" value={this.props.form.local} onChange={this.props.onChange} placeholder="Identificação Física" />
          </div>
        </div>
        <div className="field">
          <label className="label">Modelo</label>
          <div className="control">
            <input className="input" type="text" name="model" value={this.props.form.model} onChange={this.props.onChange} placeholder="NodeMCU, Arduíno..." />
          </div>
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.props.onSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Form;
