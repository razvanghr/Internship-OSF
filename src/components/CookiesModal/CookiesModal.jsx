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
  const handleClose = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cookiesTimeout = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(cookiesTimeout);
  }, []);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CookiesModalCard handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

export default CookiesModal;
