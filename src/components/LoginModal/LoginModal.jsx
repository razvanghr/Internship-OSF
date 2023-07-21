import * as React from "react";
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";

import Box from "@mui/material/Box";

import LoginCard from "./LoginCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 20,
  p: 4,
};

function LoginModal({ icon }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link onClick={handleOpen}>
        <img src={icon} alt="Profile Icon" />
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginCard handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;
