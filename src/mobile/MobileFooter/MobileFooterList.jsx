import React, { useState } from "react";
import arrowIcon from "../../assets/NavigationImages/arrow_icon.png";

import { Link } from "react-router-dom";

import { FOOTERLIST1, FOOTERLIST2 } from "../../data/FooterData";
import FooterContact from "../../components/Footer/FooterContact";

const listTitle = ["CONTACT", "CATEGORIES", "ABOUT"];

const tabContent = [FOOTERLIST1, FOOTERLIST1, FOOTERLIST2];

function MobileFooterList() {
  const [activeTabs, setActiveTabs] = useState(
    Array(listTitle.length).fill(false)
  );

  const toggleTab = (index) => {
    const newActiveTabs = [...activeTabs];
    newActiveTabs[index] = !newActiveTabs[index];
    setActiveTabs(newActiveTabs);
  };

  return (
    <div className="footer-title">
      {listTitle.map((list, index) => (
        <div key={index}>
          {index === 0 && activeTabs[index] ? (
            <div>
              <p
                onClick={() => toggleTab(index)}
                style={{ color: "#4e4e4e", cursor: "pointer" }}
              >
                {list} <img src={arrowIcon} alt="" />
              </p>
              <FooterContact />
            </div>
          ) : (
            <p onClick={() => toggleTab(index)}>
              {list} <img src={arrowIcon} alt="" />
            </p>
          )}
          {activeTabs[index] && index !== 0 && (
            <ul>
              {tabContent[index].map((item, itemIndex) => (
                <li key={itemIndex} style={{ padding: "5px" }}>
                  <Link to="/error404">{item}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default MobileFooterList;
