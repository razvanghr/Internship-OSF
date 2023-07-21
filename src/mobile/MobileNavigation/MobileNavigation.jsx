import React, { useState } from "react";

import imageLogo from "../../assets/NavigationImages/logo_icon.png";
import hamburgerIcon from "../../assets/MobileImages/hamburger-icon.png";
import closeIcon from "../../assets/MobileImages/close-icon.png";
import { Link } from "react-router-dom";

import MobileNavigationList from "./MobileNavigationList";
function MobileNavigation() {
  const [activeHamburger, setActiveHamburger] = useState(true);
  return (
    <>
      <div className="mobile-nav navigation">
        <div className="mobile-nav-items">
          <img
            src={activeHamburger ? hamburgerIcon : closeIcon}
            alt=""
            onClick={() => {
              setActiveHamburger(!activeHamburger);
            }}
          />

          <Link to="/">
            <img src={imageLogo} alt="Logo Icon" style={{ flex: "4" }} />
          </Link>
        </div>
        {activeHamburger == false && <MobileNavigationList />}
      </div>
    </>
  );
}

export default MobileNavigation;
