import React from "react";
import "./Error404.scss";
import searchIcon from "../../assets/NavigationImages/search_icon.png";

import { Link } from "react-router-dom";
function Error404Page() {
  return (
    <div className="non-product-page">
      <header className="non-product-header">
        <p>
          <Link to="/">Home</Link> / 404
        </p>
        <div className="error404-header-intro">
          {/* <hr /> */}
          <h1>404</h1>
          {/* <hr /> */}
        </div>
      </header>

      <div className="non-product-content">
        <h1 className="error-title">Oops!</h1>
        <div className="error-content-right">
          <h1>Sorry, this could not be found!</h1>
          <p>
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus
            <br /> et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula <br />
            eget dolor. Aenean massa.
          </p>
          <Link to="/">Go back to Homepage</Link>
          <div className="error-search-content">
            <h1>Search our site</h1>
            <div className="error-search-input">
              <input type="text" placeholder="SEARCH" />
              <img src={searchIcon} alt="Search Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404Page;
