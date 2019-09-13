import React, { Component } from "react";
import './Sidebar.css';

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.filterList = this.filterList.bind(this);
    this.setActiveDropdown = this.setActiveDropdown.bind(this);
  }

  componentWillMount() {
    this.setState({ items: this.props.hortas })
  }

  setActiveDropdown(ev) {
    console.log("ta chegando?")
    if (ev.currentTarget.classList.contains("is-active")) {
      ev.currentTarget.classList.remove("is-active");
    } else {
      ev.currentTarget.classList.add("is-active");
    }
  }

  filterList(event) {
    let updatedList = this.props.hortas;
    updatedList = updatedList.filter(function (item) {
      return item.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  }

  render() {

    let hortas = this.state.items.map(horta => {
      return (
        <li key={horta.id}>
          <a onClick={(ev) => this.setActiveDropdown(ev)} className="is-active">{horta.name}</a>
          <ul>
            {horta.devices.map(device => {
              return (
                <li key={device.id}>{device.name}</li>
              )
            })}
          </ul>
        </li>
        // <div key={horta.id} onClick={(ev) => this.setActiveDropdown('horta'+horta.id, ev)} id={'horta'+horta.id} className="dropdown">
        //   <div className="dropdown-trigger menu-dropdown">
        //     <button className="button menu-but
        ton" aria-haspopup="true" aria-controls="dropdown-menu">
        //       <span>{horta.name}</span>
        //       <span className="icon is-small">
        //         <i className="fas fa-angle-down" aria-hidden="true"></i>
        //       </span>
        //     </button>
        //   </div>
        //   <div className="dropdown-menu" id="dropdown-menu" role="menu">
        //     <div className="dropdown-content">
        //     {horta.devices.map(device => {
        //       return (
        //         <div key={device.id} className="dropdown-item">{device.name}</div>
        //       )
        //     })}
        //     </div>
        //   </div>
        // </div>
      )
    })

    return (
      <div className="Sidebar">
        <aside className="menu">
          <h4 className="title menu-tltle">Hortas</h4>
          <div className="field input-find">
            <p className="control has-icons-left">
              <input className="input" type="text" onChange={this.filterList} placeholder="Filtrar Hortas" />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </p>
          </div>
          <ul className="menu-list">
            {hortas}
          </ul>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
