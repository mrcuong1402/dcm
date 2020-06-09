import React, { Component } from "react";

class Testimonial extends Component {
  render() {
    return (
      <div className="item">
        <div className="revs-item">
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="user">
            <div className="img">
              <img src="images\man1.jpg" alt />
            </div>
            <div className="info">
              <div className="name">Helen Floyd</div>
              <div className="company">Art Director</div>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
