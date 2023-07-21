import React, { useState } from "react";
import arrowIcon from "../../assets/NavigationImages/arrow_icon.png";
import { LIST1, LIST2, LIST3, LIST4 } from "../../data/DropDownList";
import { Link } from "react-router-dom";

import mobileNavImage from "../../assets/MobileImages/nav-image.png";

const listTitle = ["SERVICES", "COMPANY", "LIBRARY", "CONTACT US"];

const tabContent = [LIST1, LIST2, LIST3, LIST4];

function MobileNavigationList() {
  const [activeTabs, setActiveTabs] = useState(
    Array(listTitle.length).fill(false)
  );

  const toggleTab = (index) => {
    const newActiveTabs = [...activeTabs];
    newActiveTabs[index] = !newActiveTabs[index];
    setActiveTabs(newActiveTabs);
  };

  return (
    <div className="mobile-lists">
      <div className="mobile-lists-title">
        {listTitle.map((list, index) => (
          <div key={index}>
            <p onClick={() => toggleTab(index)}>
              {list} <img src={arrowIcon} alt="" />
            </p>
            {activeTabs[index] && (
              <ul>
                {tabContent[index].map((item, itemIndex) => (
                  <li key={itemIndex} style={{ padding: "5px" }}>
                    <Link to="/error404" style={{ color: "#ffff" }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <img src={mobileNavImage} alt="" />
    </div>
  );
}

export default MobileNavigationList;
