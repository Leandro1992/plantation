import React, { Component } from 'react';
import './Garden.css';
import NavBar from '../../components/NavBar/';
import Table from './components/Table';
import Form from './components/Form';
import axios from 'axios';


class Garden extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hortas: [],
      form: { id: "", name: "" }
    };

    this.user = JSON.parse(localStorage.getItem('id_user'))
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  getAllHortas() {
    let me = this;
    axios.get('http://localhost:3000/buscaHortas').then(function (response) {
      if (response.data.success) {
        let hortas = response.data.info.map(el => {
          return { id: el._id, name: el.nome, data_fim: el.created_at }
        })
        me.setState({
          hortas: hortas
        });
      } else {
        alert("Credenciais inválidas")
      }
    }).catch(err => {
      console.log(err)
    });
  }

  componentDidMount() {
    this.getAllHortas();
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
    let newHortas = this.state.hortas;
    const updatedHortas = newHortas.filter(item => item.id !== data.id);
    this.setState({
      hortas: updatedHortas
    });

    this.setState({
      form: { id: "", name: "" }
    });
  }

  handleSubmit() {
    //TODO INSERT ON DATABASE AND GET CALLBACK
    if (this.state.form.name) {
      let me = this;
      let data = {
        _id: this.state.form.id === "" ? null : this.state.form.id,
        nome: this.state.form.name,
        conta: this.user._id
      };
      axios.post('http://localhost:3000/createOrUpdateHorta', data).then(function (response) {
        console.log("ta chegando?", response)
        if (response.data.success) {
          me.getAllHortas();
          me.setState({
            form: { id: "", name: "" }
          });
        } else {
          alert("Credenciais inválidas")
        }
      }).catch(err => {
        console.log(err.response)
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar name="Hortas" />
        <div className="Hortas container">
          <div className="columns">
            <div className="column">
              <Form form={this.state.form} onChange={this.handleInputChange} onSubmit={this.handleSubmit} />
            </div>
            <div className="column">
              <Table hortas={this.state.hortas} handleEdit={this.handleEdit} handleRemove={this.handleRemove} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Garden