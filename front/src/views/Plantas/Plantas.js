import React, { Component } from "react";
import './Plantas.css';
import NavBar from '../../components/NavBar/';
import Table from './components/Table';
import Form from './components/Form';

class Plantas extends Component {

  //TODO GET ALL PLANTS FROM DATABASE TO POPULATE

  constructor(props) {
    super(props);

    this.state = {
      plants: [{
        id: 1, name: "Alface", lumi: "Alta", temp_min: 10, temp_max: 24, irrigation: "Wet", crop: 55
      }],
      form: { id: "", name: "", lumi: "", temp_min: "", temp_max: "", irrigation: "", crop: "" }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleInputChange(e) {
    let newForm = { ...this.state.form }
    let target = e.target.name;
    newForm[target] = e.target.value;
    
    this.setState({
      form: newForm
    });
  }

  handleEdit(data) {
    this.setState({
      form: data
    });
  }

  handleRemove(data) {
    let newPlants = this.state.plants;
    const updatedPlants = newPlants.filter(item => item.id !== parseInt(data.id));

    this.setState({
      plants: updatedPlants
    });

    this.setState({
      form: { id: "", name: "", lumi: "", temp_min: "", temp_max: "", irrigation: "", crop: "" }
    });
  }

  handleSubmit() {
    //TODO INSERT ON DATABASE AND GET CALLBACK
    let newPlants = this.state.plants;
    const updatedPlants = newPlants.filter(item => item.id !== parseInt(this.state.form.id));

    this.setState(prevState => ({
      plants: [...updatedPlants, this.state.form]
    }))

    this.setState({
      form: { id: "", name: "", lumi: "", temp_min: "", temp_max: "", irrigation: "", crop: "" }
    });
  }

  render() {
    return (
      <div>
        <NavBar name="Plantas" />
        <div className="Plantas container">
          <div className="columns">
            <div className="column">
              <Form form={this.state.form} onChange={this.handleInputChange} onSubmit={this.handleSubmit} />
            </div>
            <div className="column">
              <Table plants={this.state.plants} handleEdit={this.handleEdit} handleRemove={this.handleRemove} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plantas;
