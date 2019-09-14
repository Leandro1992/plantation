import React, { Component } from "react";
import './Sidebar.css';

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.filterList = this.filterList.bind(this);
  }

  showDataGarden(id){
    console.log(id, "aehooo")
  }

  componentWillMount() {
    this.setState({ items: this.props.hortas })
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
          <a onClick={() => this.showDataGarden(horta.id)} className="is-active garden-list">{horta.name}</a>
        </li>
      )
    })

    return (
      <div className="Sidebar">
        <aside className="menu">
          <h4 className="title menu-tltle">Gardens</h4>
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
