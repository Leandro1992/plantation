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
  }

  handleInputChange(e){
    let newForm = {...this.state.form}
    let target = e.target.name;
    newForm[target] = e.target.value
    this.setState({
      form : newForm
    });
  }

  handleSubmit(){
    //TODO INSERT ON DATABASE AND GET CALLBACK

    this.setState(prevState => ({
      sensors: [...prevState.sensors, this.state.form]
    }))
    this.setState({
      form : { id: "", name: "", local: "", model: "" }
    });
  }

  render() {
    return (
      <div>
        <NavBar name="Sensores"/>
        <div className="Sensores container">
          <div className="columns">
            <div className="column">
              <Form form={this.state.form} onChange={this.handleInputChange} onSubmit={this.handleSubmit} />
            </div>
            <div className="column">
              <Table sensors={this.state.sensors} />
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Sensores;
