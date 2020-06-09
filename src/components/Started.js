import React, { Component } from "react";

class Started extends Component {
  render() {
    return (
      <div className="card-started" id="home-card">
        {/*
					Profile
				*/}
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/man5_big.jpg)" }}
          />
          {/* profile photo */}
          <div className="image">
            <img src="images\profile.png" alt />
          </div>
          {/* profile titles */}
          <div className="title">Nguyen Ngoc Cuong</div>
          <div className="subtitle">Web Designer</div>
          {/* profile socials */}
          <div className="social">
            <a target="_blank" href="https://dribbble.com/">
              <span className="fab fa-dribbble" />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <span className="fab fa-twitter" />
            </a>
            <a target="_blank" href="https://github.com/">
              <span className="fab fa-github" />
            </a>
            <a target="_blank" href="https://www.spotify.com/">
              <span className="fab fa-spotify" />
            </a>
            <a target="_blank" href="https://stackoverflow.com/">
              <span className="fab fa-stack-overflow" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
              <span className="ion ion-archive" />
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
              <span className="arrow" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Started;
