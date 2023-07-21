import React, { useState, useEffect } from "react";
import axios from "axios";

import submitIcon from "../../assets/MainImages/submit-icon.png";
// Clock

import Clock from "../../components/Clock/Clock";

import "./ReleasePage.scss";

import { Link } from "react-router-dom";

function ReleasePage() {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    let isActive = true;

    const getCountdownData = async () => {
      const res = await axios.get(
        "https://internshiposf-api.netlify.app/.netlify/functions/api/countdown/2023-07-31"
      );

      if (isActive) {
        setCountdown(res.data);
      }
    };

    getCountdownData();

    if (isActive) {
      const interval = setInterval(async () => {
        const updatedRes = await axios.get(
          "https://internshiposf-api.netlify.app/.netlify/functions/api/countdown/2023-07-31"
        );

        if (isActive) {
          setCountdown(updatedRes.data);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
        isActive = false;
      };
    }
  }, []);

  if (!countdown) {
    return <div className="release-loading">Loading...</div>;
  }

  return (
    <div className="release-page-container">
      <div className="release-page">
        <div className="release-header">
          <h1>We will Release OSF Academy</h1>
          <p>
            We are working hard and estimated release time products below.
            <br /> Sed ac tristique nunc, ut gravida nunc. Nulla consequat erat
            non lectus imperdiet.
          </p>
        </div>
        <Clock time={countdown} />
        <div className="release-input">
          <input
            type="text"
            placeholder="Enter your email to receive the latest announcements"
          />
          <Link to="/error404">
            <img src={submitIcon} alt="Submit Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReleasePage;
