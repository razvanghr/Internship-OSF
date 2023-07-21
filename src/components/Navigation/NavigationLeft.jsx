import React from "react";

import Logo from "../../assets/NavigationImages/logo_icon.png";
import { Link } from "react-router-dom";
export default function NavigationLeft() {
  return (
    <Link to="/">
      <div className="navigation-left ">
        <img src={Logo} alt="" />
        <div className="logo-text">
          <h1 className="logo-text-1">OSF</h1>
          <h1 className="logo-text-2">Academy</h1>
        </div>
      </div>
    </Link>
  );
}
