import React, { Component } from "react";

class Preloader extends Component {
  render() {
    return (
      <div classname="preloader">
        <div classname="centrize full-width">
          <div classname="vertical-center">
            <div classname="spinner">
              <div classname="double-bounce1">
                <div classname="double-bounce2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
