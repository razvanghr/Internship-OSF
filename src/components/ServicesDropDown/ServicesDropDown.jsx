import React from "react";

import DropDownImage from "../../assets/NavigationImages/ServicesDropDown-image.png";
import "./ServicesDropDown.scss";
import ServiceList from "./ServiceList";

import { LIST1, LIST2, LIST3, LIST4 } from "../../data/DropDownList";
function ServicesDropDown() {
  return (
    <div className="services-dropdown">
      <div className="services-dropdown-text">
        <div className="drop-down-title">
          <p>PRODUCT CATEGORIES</p>
          <p>SALE</p>
        </div>
        <div className="drop-down-lists">
          <ServiceList LIST={LIST1} />
          <ServiceList LIST={LIST2} />
          <ServiceList LIST={LIST3} />
          <ServiceList LIST={LIST4} />
        </div>
      </div>
      <img src={DropDownImage} alt="Drop Down Image" />
    </div>
  );
}

export default ServicesDropDown;
