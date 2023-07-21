import React from "react";

import closeIcon from "../../assets/CookiesModalImages/close-icon.png";

import { Link } from "react-router-dom";

function CookiesModalCard({ handleClose }) {
  return (
    <div className="cookies-modal-card">
      <div className="cookies-card-text">
        <h1>This website uses cookies</h1>
        <p>
          OSF uses its own and third-party cookies for statistical purposes, to
          know your preferences, for website performance and interaction with
          social media offering publicity tailored to your interests. If you
          continue browsing, we consider that you accept its use. You can expand
          this information consulting our
          <Link to="/error404"> Cookies Policy Page.</Link>
        </p>
      </div>
      <button onClick={handleClose}>Accept</button>
      <img
        src={closeIcon}
        alt="Close Icon"
        className="cookies-close"
        onClick={handleClose}
      />
    </div>
  );
}

export default CookiesModalCard;
