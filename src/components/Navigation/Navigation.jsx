import React from "react";
import "./Navigation.scss";

import { Link } from "react-router-dom";
import NavigationLeft from "./NavigationLeft";
import NavigationRight from "./NavigationRight";

function Navigation() {
  return (
    <div className="container">
      <div className="navigation flex">
        <NavigationLeft />
        <NavigationRight />
      </div>
    </div>
  );
}

export default Navigation;
