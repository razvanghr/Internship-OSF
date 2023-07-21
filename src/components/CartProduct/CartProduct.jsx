import React from "react";

import { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { AiOutlineClose } from "react-icons/ai";

import "./CartProduct.scss";

function CartProduct({ data }) {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    updateCartItemCount,
  } = useContext(ShopContext);

  let [quantity, setQuantity] = useState(cartItems[data.id]);

  return (
    <div className="cart-product">
      {/* Product Image */}
      <img src={data.productImage} alt="" />

      {/* Product Name and Price */}
      <div className="cart-product-info">
        <h1>{data.productName}</h1>
        <p>${data.price}</p>
      </div>

      <div className="cart-handler">
        <button onClick={() => removeFromCart(data.id)}>-</button>

        <input
          type="numeric"
          value={cartItems[data.id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), data.id)}
        />

        <button onClick={() => addToCart(data.id)}>+</button>
      </div>
      <p className="product-final-price">
        {Math.floor(data.price * cartItems[data.id])}$
      </p>

      <AiOutlineClose
        className="remove-product-button"
        onClick={() => removeAllFromCart(data.id)}
      />
    </div>
  );
}

export default CartProduct;
