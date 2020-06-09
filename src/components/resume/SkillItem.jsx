import React, { Component } from "react";
import DesignItem from "./design/DesignItem";

class SkillItem extends Component {
  render() {
    return (
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div className="skills-list">
          <div className="skill-title border-line-h">
            <div className="icon">
              <i className="ion ion-easel" />
            </div>
            <div className="name">Design</div>
          </div>
          <ul>
            <DesignItem/>
            <DesignItem/>
            <DesignItem/>
          </ul>
        </div>
      </div>
    );
  }
}

export default SkillItem;
