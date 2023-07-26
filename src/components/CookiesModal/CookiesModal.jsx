import React, { useState } from "react";

import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import "./CookiesModalCard";
import "./CookiesModal.scss";
import CookiesModalCard from "./CookiesModalCard";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 20,
  outline: 0,
  border: 0,
  p: 1,
};

function CookiesModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cookiesTimeout = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    const cookieAccepted = localStorage.getItem("cookieAccepted");

    if (cookieAccepted) {
      clearTimeout(cookiesTimeout);
    }

    return () => clearTimeout(cookiesTimeout);
  }, []);

  const acceptCookie = () => {
    localStorage.setItem("cookieAccepted", true);
    setIsOpen(false);
  };

  const declineCookie = () => {
    localStorage.setItem("cookieAccepted", false);
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={declineCookie}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CookiesModalCard
            acceptCookie={acceptCookie}
            declineCookie={declineCookie}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default CookiesModal;
