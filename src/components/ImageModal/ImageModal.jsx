import { Lightbox } from "react-modal-image";

import zoomImage from "../../assets/MainImages/zoom-icon.png";
import { useState } from "react";

function ImageModal({ image }) {
  const [isActive, setIsActive] = useState(false);

  const closeLightbox = () => {
    setIsActive(false);
  };
  return (
    <>
      <img
        src={zoomImage}
        alt="Zoom Image"
        className="zoom-image"
        style={{ width: "8%" }}
        onClick={() => setIsActive(true)}
      />
      {isActive && <Lightbox large={image} onClose={closeLightbox} />}
    </>
  );
}

export default ImageModal;
