import React, { Component } from "react";
import './Sensores.css';
import NavBar from '../../components/NavBar/';
import Table from './components/Table';
import Form from './components/Form';

class Sensores extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sensors: [{
        id: 1, name: "Device 01", local: "Horta 21", model: "MCU"
      }],
      form: { id: "", name: "", local: "", model: "" }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleInputChange(e) {
    let newForm = { ...this.state.form }
    let target = e.target.name;
    newForm[target] = e.target.value
    this.setState({
      form: newForm
    });
  }

  handleSubmit() {
    //TODO INSERT ON DATABASE AND GET CALLBACK
    let newSensors = this.state.sensors;
    const updatedSensors = newSensors.filter(item => item.id !== parseInt(this.state.form.id));

    this.setState(prevState => ({
      sensors: [...updatedSensors, this.state.form]
    }))
    
    this.setState({
      form: { id: "", name: "", local: "", model: "" }
    });
  }

  handleEdit(data) {
    this.setState({
      form: data
    });
  }

  handleRemove(data) {
    let newSensors = this.state.sensors;
    const updatedSensors = newSensors.filter(item => item.id !== parseInt(data.id));

    this.setState({
      sensors: updatedSensors
    });

    this.setState({
      form: { id: "", name: "", local: "", model: "" }
    });
  }

  render() {
    return (
      <div>
        <NavBar name="Sensores" />
        <div className="Sensores container">
          <div className="columns">
            <div className="column">
              <Form form={this.state.form} onChange={this.handleInputChange} onSubmit={this.handleSubmit} />
            </div>
            <div className="column">
              <Table sensors={this.state.sensors} handleEdit={this.handleEdit} handleRemove={this.handleRemove} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sensores;
