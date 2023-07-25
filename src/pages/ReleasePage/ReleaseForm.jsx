import React from "react";
import submitIcon from "../../assets/MainImages/submit-icon.png";
import axios from "axios";
import { useState } from "react";

function ReleaseForm() {
  const [email, setEmail] = useState("");
  const [resMessage, setResMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        url: "https://internshiposf-api.netlify.app/.netlify/functions/api/email",
        data: {
          email: email,
        },
        method: "POST",
      });

      setResMessage(response.data);
      setEmail("");
    } catch (error) {
      if (error.response) {
        setResMessage(error.response.data);
        setEmail("");
      }
    }
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form className="release-input" onSubmit={sendEmail}>
        <input
          type="text"
          value={email}
          placeholder="Enter your email to receive the latest announcements"
          onChange={getEmail}
        />
        <img src={submitIcon} alt="Submit Icon" onClick={sendEmail} />
      </form>
      {resMessage && <p>{resMessage}</p>}
    </>
  );
}

export default ReleaseForm;
