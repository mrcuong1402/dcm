import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className="content about">
        {/* title */}
        <div className="title">About Me</div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="text-box">
              <p>
                I am Ryan Adlard, web designer from USA, California. I have rich
                experience in web site design and building and customization,
                also I am good at wordpress. I love to talk with you about our
                unique.
              </p>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Age . . . . .</strong> 24
                </li>
                <li>
                  <strong>Residence . . . . .</strong> USA
                </li>
                <li>
                  <strong>Freelance . . . . .</strong> Available
                </li>
                <li>
                  <strong>Address . . . . .</strong> California, USA
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  }
}

export default AboutMe;
