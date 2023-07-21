import React from "react";

import searchIcon from "../../assets/FooterNavigationIcons/search-icon.png";
import profileIcon from "../../assets/FooterNavigationIcons/profile-icon.png";
import heartIcon from "../../assets/FooterNavigationIcons/heart-icon.png";
import cartIcon from "../../assets/FooterNavigationIcons/bag-icon.png";

import { Link } from "react-router-dom";
import LoginModal from "../../components/LoginModal/LoginModal";

//
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function FooterNavigation() {
  const { getCartItemCount } = useContext(ShopContext);
  const { getWishlistItemCount } = useContext(ShopContext);
  return (
    <div className="footer-navigation">
      <Link to="/error404">
        <img src={searchIcon} alt="Search Icon" />
      </Link>
      <LoginModal icon={profileIcon} />
      <Link to="/error404">
        <div className="cart-context">
          <img src={heartIcon} alt="Heart Icon" />
          <p style={{ backgroundColor: "#262a32" }}>{getWishlistItemCount()}</p>
        </div>
      </Link>
      <Link to="/cart">
        <div className="cart-context">
          <img src={cartIcon} alt="Cart Icon" />
          <p style={{ backgroundColor: "#262a32" }}>{getCartItemCount()}</p>
        </div>
      </Link>
    </div>
  );
}

export default FooterNavigation;
