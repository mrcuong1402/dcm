import React, { Component } from "react";

class Client extends Component {
  render() {
    return (
      <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
        <div className="client-item">
          <div className="image">
            <a target="_blank" href="https://www.google.com">
              <img src="images\clients\client_1.png" alt />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
