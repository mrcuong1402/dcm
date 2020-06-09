import React, { Component } from "react";

class PricingItem extends Component {
  render() {
    return (
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div className="pricing-item">
          <div className="icon">
            <i className="ion ion-speedometer speed-basic" />
          </div>
          <div className="name">Basic</div>
          <div className="amount">
            <span className="dollar">$</span>
            <span className="number">22</span>
            <span className="period">hour</span>
          </div>
          <div className="feature-list">
            <ul>
              <li>Web Development</li>
              <li>Advetising</li>
              <li>Game Development</li>
              <li className="disable">Music Writing</li>
              <li className="disable">
                Photography <strong>new</strong>
              </li>
            </ul>
          </div>
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Buy Basic</span>
              <i className="ion ion-speedometer speed-basic" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingItem;
