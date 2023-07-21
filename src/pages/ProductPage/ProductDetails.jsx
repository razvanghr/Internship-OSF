import React, { useState } from "react";

import MediaQuery from "react-responsive";

import ImageShow from "../../components/ImageShow/ImageShow";
import { Link } from "react-router-dom";
import p1 from "../../assets/ProductDetailImages/p1.jpg";
import p2 from "../../assets/ProductDetailImages/p2.jpg";
import p3 from "../../assets/ProductDetailImages/p3.jpg";
import p4 from "../../assets/ProductDetailImages/p4.jpg";

import { useContext } from "react";
import ProductDescription from "../../components/ProductDescription/ProductDescription";

import { ShopContext } from "../../context/shop-context";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
} from "react-icons/fa";

const pDpImages = [p1, p2, p3, p4];

function ProductDetails() {
  const [inputAmmount, setInputAmmount] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  // Add to Cart
  const { addToCartProduct } = useContext(ShopContext);

  return (
    <div className="product-details">
      <div className="product-details-info">
        <ImageShow images={pDpImages} />
        <div className="product-details-text">
          <h1>$299.99</h1>
          <select name="colors" id="colors">
            <option value="#">Dark Grey</option>
            <option value="#">Blue Marin</option>
          </select>

          <div className="cart-details">
            <div className="cart-handler">
              <button
                onClick={() => {
                  setInputAmmount(inputAmmount - 1);
                }}
              >
                -
              </button>
              <input
                type="numeric"
                value={inputAmmount}
                onChange={(e) => setInputAmmount(e.target.value)}
                style={{ backgroundColor: "transparent" }}
              />
              <button
                onClick={() => {
                  setInputAmmount(inputAmmount + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              className="add-to-cart"
              onClick={() => addToCartProduct(2, inputAmmount)}
            >
              ADD TO CART
            </button>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit
            <br /> voluptatem accusantium doloremque laudantium,
            <br /> totam rem aperiam, eaque ipsa quae ab illo inventore
            <br />
            Beatae vitae dicta sunt explicabo.
            <br /> Nemo enim ipsam voluptatem quia voluptas
          </p>
          {loadMore && (
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit
              <br /> voluptatem accusantium doloremque laudantium,
              <br /> totam rem aperiam, eaque ipsa quae ab illo inventore
              <br />
              Beatae vitae dicta sunt explicabo.
              <br /> Nemo enim ipsam voluptatem quia voluptas
            </p>
          )}
          <p
            style={{ color: "#84bc22", cursor: "pointer" }}
            onClick={() => setLoadMore(!loadMore)}
          >
            {loadMore ? "Read Less" : "Read More"}
          </p>
          <div className="details-contact">
            <p>Share</p>
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
        </div>
      </div>
      <MediaQuery minWidth={400}>
        <ProductDescription />
      </MediaQuery>
    </div>
  );
}

export default ProductDetails;
