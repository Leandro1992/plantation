import React, { Component } from "react";
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <aside className="menu">
          <h4 className="title menu-tltle">Hortas</h4>
          <div className="field input-find">
            <p className="control has-icons-left">
              <input className="input" type="text" placeholder="Filtrar Hortas" />
                <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </p>
          </div>
          <ul className="menu-list">
            <li><a>Horta 1</a></li>
            <li><a>Horta 2</a></li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
