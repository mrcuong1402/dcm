import React, { Component } from "react";

class ServiceItem extends Component {
  render() {
    return (
      <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
        <div className="service-item">
          <div className="icon">
            <span className="ion ion-code" />
          </div>
          <div className="name">Web Development</div>
          <p>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>
      </div>
    );
  }
}

export default ServiceItem;
