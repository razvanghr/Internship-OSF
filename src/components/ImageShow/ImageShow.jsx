import React, { useState } from "react";

import "./ImageShow.scss";

import ImageModal from "../ImageModal/ImageModal";

function ImageShow({ images }) {
  const [mainImage, setMainImage] = useState(images[1]);
  const [activeImage, setActiveImage] = useState(1);

  const setImage = (image) => {
    setMainImage(image);
  };

  const activeClick = (imgNumber) => {
    setActiveImage(imgNumber);
  };

  const setMainActive = (image, imgNumber) => {
    setImage(image);
    activeClick(imgNumber);
  };
  return (
    <div className="image-show">
      <div className="main-image-show">
        <img src={mainImage} alt="Main Image" />
        <ImageModal image={mainImage} />
      </div>
      <div className="secondary-image-show">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Secondary Image"
            onClick={() => {
              setMainActive(image, index);
            }}
            className={activeImage === index ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageShow;
