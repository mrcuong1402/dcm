import React, { Component } from "react";

class ExperienceItem extends Component {
  render() {
    return (
      <div className="resume-item border-line-h active">
        <div className="date">2013 - Present</div>
        <div className="name">Art Director</div>
        <div className="company">Facebook Inc.</div>
        <p>
          Collaborate with creative and development teams on the execution of
          ideas.
        </p>
      </div>
    );
  }
}

export default ExperienceItem;
