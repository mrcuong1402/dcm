import React, { Component } from "react";

class EducationItem extends Component {
  render() {
    return (
      <div className="resume-item border-line-h">
        <div className="date">2006 - 2008</div>
        <div className="name">Art University</div>
        <div className="company">New York</div>
        <p>
          Bachelor's Degree in Computer Science ABC Technical Institute,
          Jefferson, Missouri
        </p>
      </div>
    );
  }
}

export default EducationItem;
