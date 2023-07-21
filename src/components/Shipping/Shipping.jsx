import React from "react";

import "./Shipping.scss";

function Shipping() {
  return (
    <div className="shipping">
      <p className="bold">SHIPPING AND HANDELING:</p>
      <div className="shipping-options">
        <label>
          <input
            type="checkbox"
            value="option1"
            className="checkbox-round"
            onChange={(e) => console.log(e.target.value)}
          />
          Flat Rate: <span className="bold">$10.00</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="option1"
            className="checkbox-round"
            onChange={(e) => console.log(e.target.value)}
          />
          Free Shipping
        </label>
        <label>
          <input
            type="checkbox"
            value="option1"
            className="checkbox-round"
            onChange={(e) => console.log(e.target.value)}
          />
          International: <span className="bold">$60.00</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="option1"
            className="checkbox-round"
            onChange={(e) => console.log(e.target.value)}
          />
          Local Delivery: <span className="bold">$5.00</span>
        </label>
        <label>
          <input
            type="checkbox"
            className="checkbox-round"
            value="option1"
            onChange={(e) => console.log(e.target.value)}
          />
          Local Pickup (free)
        </label>
      </div>
    </div>
  );
}

export default Shipping;
