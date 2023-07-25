import React from "react";

import MobileFooterList from "./MobileFooterList";
import FooterNavigation from "./FooterNavigation";

import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
} from "react-icons/fa";

function MobileFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer-container">
        <p>
          © Copyright {currentYear}
          <br /> All Rights Reserved.
        </p>
        <MobileFooterList />
      </div>
      <div className="mobile-footer-contact">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <FaGooglePlusG />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.pinterest.ca/" target="_blank">
          <FaPinterestP />
        </a>
      </div>
      <FooterNavigation />
    </footer>
  );
}

export default MobileFooter;
