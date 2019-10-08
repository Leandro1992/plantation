import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div className="title">Cadastro de Hortas</div>
        <div className="field">
          <label className="label">Nome</label>
          <div className="control">
            <input className="input" name="name" value={this.props.form.name} onChange={this.props.onChange} type="text" placeholder="Nome popular da planta" />
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
