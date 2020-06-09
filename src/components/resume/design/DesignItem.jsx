import React, { Component } from "react";

class DesignItem extends Component {
  render() {
    return (
      <li className="border-line-h">
        <div className="name">Web Design</div>
        <div className="progress">
          <div className="percentage" style={{ width: "90%" }} />
        </div>
      </li>
    );
  }
}

export default DesignItem;
