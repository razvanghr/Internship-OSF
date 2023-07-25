import React, { useState } from "react";
import arrowIcon from "../../assets/NavigationImages/arrow_icon.png";
import {
  LIST1_MOBILE,
  LIST2,
  LIST3,
  LIST4,
  LIST1_SUBMENU,
} from "../../data/DropDownList";
import { Link } from "react-router-dom";

import mobileNavImage from "../../assets/MobileImages/nav-image.png";

const listTitle = ["SERVICES", "COMPANY", "LIBRARY", "CONTACT US"];

const tabContent = [LIST1_MOBILE, LIST2, LIST3, LIST4];

function MobileNavigationList() {
  const [activeTabs, setActiveTabs] = useState(
    Array(listTitle.length).fill(false)
  );

  const [activeTabsLevel3, setActiveTabsLevel3] = useState(
    Array(LIST1_SUBMENU.length).fill(false)
  );

  const toggleTab = (index) => {
    const newActiveTabs = activeTabs.map((tab, tabIndex) =>
      tabIndex === index ? !tab : false
    );
    setActiveTabs(newActiveTabs);
    setActiveTabsLevel3(Array(LIST1_SUBMENU.length).fill(false));
  };

  const toggleTabLevel3 = (index) => {
    setActiveTabsLevel3((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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
                    <Link
                      onClick={() => toggleTabLevel3(itemIndex)}
                      to="/error404"
                      style={{ color: "#ffff" }}
                    >
                      {item} {index === 0 && <img src={arrowIcon} alt="" />}
                    </Link>
                    {index === 0 && activeTabsLevel3[itemIndex] && (
                      <ul>
                        {LIST1_SUBMENU.map((subItem, subItemIndex) => (
                          <li className="dropdown-l3" key={subItemIndex}>
                            <Link to="/error404">{subItem}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
