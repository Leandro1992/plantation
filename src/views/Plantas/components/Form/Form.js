import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div className="title">Cadastro de plantas</div>
        <div className="field">
          <label className="label">ID</label>
          <div className="control">
            <input className="input" name="id" value={this.props.form.id} onChange={this.props.onChange} type="text" placeholder="indentificador" />
          </div>
        </div>
        <div className="field">
          <label className="label">Nome</label>
          <div className="control">
            <input className="input" name="name" value={this.props.form.name} onChange={this.props.onChange} type="text" placeholder="Nome popular da planta" />
          </div>
        </div>
        <div className="field">
          <label className="label">Luminosidade</label>
          <div className="control">
            <input className="input" name="lumi" value={this.props.form.lumi} onChange={this.props.onChange} type="text" placeholder="Alta, Médio ou Baixa" />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Temperatura Máxima (Cº)</label>
              <div className="control">
                <input className="input" name="temp_min" value={this.props.form.temp_min} onChange={this.props.onChange} type="number" placeholder="30º" />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Temperatura Mínima (Cº)</label>
              <div className="control">
                <input className="input" name="temp_max" value={this.props.form.temp_max} onChange={this.props.onChange} type="number" placeholder="0º" />
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Irrigação</label>
          <div className="control">
            <input className="input" type="text" name="irrigation" value={this.props.form.irrigation} onChange={this.props.onChange} placeholder="Encharcado, Alagado, Úmido ou Seco" />
          </div>
        </div>
        <div className="field">
          <label className="label">Colheita (Dias)</label>
          <div className="control">
            <input className="input" type="number" name="crop" value={this.props.form.crop} onChange={this.props.onChange} placeholder="60" />
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
