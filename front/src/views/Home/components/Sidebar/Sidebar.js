import React, { Component } from "react";
import './Sidebar.css';
import axios from 'axios';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    console.log(props, "tem o que?")
    this.state = {
      items: [],
      tempList: [],
      activeId: null
    };

    this.filterList = this.filterList.bind(this);
    this.getList = this.getList.bind(this);
    this.activeItem = this.activeItem.bind(this);
  }

  showDataGarden(id) {
    console.log(id, "aehooo")
  }

  componentDidMount() {
    axios.get('http://localhost:3000/getSensors').then(response => {
      this.setState({ items: response.data.data ? response.data.data : [] });
      this.setState({ tempList: response.data.data ? response.data.data : [] });
    }).catch(err => console.log(err));
  }

  filterList(event) {
    let updatedList = this.state.items;
    updatedList = updatedList.filter(function (item) {
      return item.nome.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ tempList: updatedList });
  }

  activeItem(id) {
    this.setState({ activeId: id });
  }

  getList() {
    return this.state.tempList.map((item) => {
        return (
          <li onClick={() => { this.activeItem(item._id); this.props.selected(item) }} className={this.state.activeId === item._id ? "menu-list-li active" : 'menu-list-li'} key={item._id}>
            <span className="is-active garden-list">{item.nome}</span>
          </li>
        )
    })
  }

  render() {
    return (
      <div className="Sidebar">
        <aside className="menu">
          <div className="field input-find">
            <p className="control has-icons-left">
              <input className="input" type="text" onChange={this.filterList} placeholder="Filtrar Devices" />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </p>
          </div>
          <ul className="menu-list">
            {this.getList()}
          </ul>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
