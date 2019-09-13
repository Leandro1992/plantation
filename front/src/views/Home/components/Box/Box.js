import React, { Component } from "react";
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <div className={this.props.type}>
          <p className="title-box is-1 is-spaced"><i className={this.props.icon}></i> {this.props.info}</p>
          <p className="is-5">{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default Box;
