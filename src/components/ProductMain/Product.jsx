import React, { useContext, useState } from "react";
import "./Product.scss";
import plusImage from "../../assets/MainImages/plus-button.png";
import heartImage from "../../assets/MainImages/heart-button.png";
import { ShopContext } from "../../context/shop-context";

import { Link } from "react-router-dom";
function Product({ data }) {
  const { addToCart } = useContext(ShopContext);
  const { addToWishlist } = useContext(ShopContext);

  return (
    <>
      {data.id !== 2 && data.id !== 8 ? (
        <div className="product-card">
          <img src={data.productImage} alt="Product Image" />
          <p>{data.productName}</p>
          <p>${data.price}</p>
          <div className="card-body">
            <img
              src={plusImage}
              alt="Plus Image Hover"
              className="hover-button"
              onClick={() => addToCart(data.id)}
            />
            <img
              src={heartImage}
              alt="Hear Image Hover"
              className="hover-button"
              onClick={() => addToWishlist(data.id)}
            />
          </div>
        </div>
      ) : data.id === 2 ? (
        <div className="product-card">
          <Link to="/product">
            <img src={data.productImage} alt="Product Image" />
          </Link>
          <p>{data.productName}</p>
          <div className="product-card-special">
            <p>${data.price}</p>
            <button onClick={() => addToCart(data.id)}>BUY NOW</button>
          </div>
        </div>
      ) : data.id === 8 ? (
        <div className="product-card product-card-info">
          <img src={data.productImage} alt="Product Image" />
        </div>
      ) : null}
    </>
  );
}

export default Product;

// ------------------------------
