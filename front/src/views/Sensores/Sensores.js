import React, { Component } from "react";
import './Sensores.css';
import NavBar from '../../components/NavBar/';
import Table from './components/Table';
import Form from './components/Form';
import Adopt from './components/Adopt';
import axios from 'axios';

class Sensores extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sensors: [],
      sensorsToAdopt: [],
      form: { nome: "", token: "" },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/getSensors').then(response => {
      this.setState({ sensors: response.data.data ? response.data.data: []});
      this.setState({ sensorsToAdopt: response.data.adopt });
    }).catch(err => console.log(err));
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
    console.log(this.state.form)
    axios.post('http://localhost:3000/createOrUpdateSensor', this.state.form).then(response => {
      let newSensors = this.state.sensors;
      console.log(response, newSensors)
      const updatedSensors = newSensors.filter(item => item._id !== response.data.data._id);
      this.setState(prevState => ({
        sensors: [...updatedSensors, response.data.data]
      }))
      this.setState({
        form: { nome: "", token: "" },
        sensorsToAdopt: []
      });
    }).catch(err => console.log(err));
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
      form: { nome: "", token: "" }
    });
  }

  render() {
    return (
      <div>
        <NavBar name="Sensores" />
        <div className="Sensores container">
          <div className="columns">
            <div className="column sensor">
              <Form form={this.state.form} onChange={this.handleInputChange} onSubmit={this.handleSubmit} />
            </div>
            <div className="column sensor">
              <Table sensors={this.state.sensors} handleEdit={this.handleEdit} handleRemove={this.handleRemove} />
            </div>
            <div className="column sensor">
              <Adopt sensors={this.state.sensorsToAdopt ? this.state.sensorsToAdopt : []} handleAdopt={this.handleEdit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sensores;
