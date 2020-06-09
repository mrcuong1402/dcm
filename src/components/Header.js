import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        {/* menu */}
        <div className="top-menu">
          <ul>
            <li className="active">
              <a href="#about-card">
                <span className="icon ion-person" />
                <span className="link">About</span>
              </a>
            </li>
            <li>
              <a href="#resume-card">
                <span className="icon ion-android-list" />
                <span className="link">Resume</span>
              </a>
            </li>
            <li>
              <a href="#works-card">
                <span className="icon ion-paintbrush" />
                <span className="link">Works</span>
              </a>
            </li>
            <li>
              <a href="#blog-card">
                <span className="icon ion-chatbox-working" />
                <span className="link">Blog</span>
              </a>
            </li>
            <li>
              <a href="#contacts-card">
                <span className="icon ion-at" />
                <span className="link">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
