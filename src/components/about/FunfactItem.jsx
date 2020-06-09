import React, { Component } from "react";

class FunfactItem extends Component {
  render() {
    return (
      <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
        <div className="fuct-item">
          <div className="icon">
            <span className="ion ion-disc" />
          </div>
          <div className="name">80 Albumes Listened</div>
        </div>
      </div>
    );
  }
}

export default FunfactItem;
