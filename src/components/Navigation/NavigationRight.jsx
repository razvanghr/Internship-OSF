import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import LoginModal from "../LoginModal/LoginModal";

// Shop Context

import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

// Icons
import searchIcon from "../../assets/NavigationImages/search_icon.png";
import profileIcon from "../../assets/NavigationImages/profile_icon.png";
import heartIcon from "../../assets/NavigationImages/heart_icon.png";
import cartIcon from "../../assets/NavigationImages/shopping_bag.png";
import arrowIcon from "../../assets/NavigationImages/arrow_icon.png";

// Services DropDown
import ServicesDropDown from "../ServicesDropDown/ServicesDropDown";

function NavigationRight() {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartItemCount } = useContext(ShopContext);
  const { getWishlistItemCount } = useContext(ShopContext);
  return (
    <div className="navigation-right flex">
      <div className="navigation-links">
        <div className="service">
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            SERVICE
            {isOpen && <ServicesDropDown />}
          </Link>
          <img src={arrowIcon} alt="Arrow Icon" />
        </div>
        <Link to="/error404">COMPANY</Link>
        <Link to="/release">RELEASE</Link>
        <Link to="/error404">CONTACT US</Link>
        <select name="language" id="language">
          <option value="EN">EN</option>
          <option value="FRA">FRA</option>
          <option value="RO">RO</option>
        </select>
        <select name="currency" id="currency">
          <option value="US">US$</option>
          <option value="EUR">EUR</option>
          <option value="RON">RON</option>
        </select>
      </div>
      <div className="navigation-options flex">
        <Link>
          <img src={searchIcon} alt="Search Icon" />
        </Link>
        <LoginModal icon={profileIcon} />
        <Link to="/error404">
          <div className="cart-context">
            <img src={heartIcon} alt="Heart Icon" />
            <p style={{ backgroundColor: "#ffff" }}>{getWishlistItemCount()}</p>
          </div>
        </Link>
        <Link to="/cart">
          <div className="cart-context">
            <img src={cartIcon} alt="Cart Icon" />
            <p style={{ backgroundColor: "#ffff" }}>{getCartItemCount()}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavigationRight;
