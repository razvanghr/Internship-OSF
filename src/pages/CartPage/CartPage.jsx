import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { PRODUCT } from "../../data/ProductData";
import { ShopContext } from "../../context/shop-context";
import CartProduct from "../../components/CartProduct/CartProduct";
import "./Cart.scss";

// Components

import Shipping from "../../components/Shipping/Shipping";

function CartPage() {
  //
  const { cartItems, getTotalCartAmmount } = useContext(ShopContext);

  const [isChecked, setIsChecked] = useState(false);

  const totalAmount = getTotalCartAmmount();

  return (
    <div className="cart-page">
      <header className="cart-header">
        <p>
          <Link to="/">Home</Link> / Shopping Cart
        </p>
        <div className="cart-header-title">
          {/* <hr style={{ width: 330 }} /> */}
          <h1>SHOPPING CART</h1>
          {/* <hr style={{ width: 330 }} /> */}
        </div>
      </header>

      {/* Cart Content */}
      {totalAmount > 0 ? (
        <div className="cart-content">
          {/* Cart Product */}
          <div className="cartItems">
            {PRODUCT.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartProduct key={product.id} data={product} />;
              }
            })}
            <div className="checkout">
              <div className="checkout-left">
                <input type="text" placeholder="Enter Coupon Code" />
                <button>APPLY</button>
              </div>
              <div className="checkout-right">
                <div className="checkout-buttons">
                  <button>UPDATE CART</button>
                  <button className="checkout-btn">
                    <Link to="/error404" style={{ color: "white" }}>
                      PROCEED TO CHECKOUT
                    </Link>
                  </button>
                </div>
                <div className="cart-subtotal">
                  <p>CART SUBTOTAL: </p>
                  <p className="bold">${Math.round(getTotalCartAmmount())}</p>
                </div>
                <Shipping />
                <div className="cart-total">
                  <p className="bold">ORDER TOTAL: </p>
                  <h1 className="bold" style={{ color: "#514e4b" }}>
                    ${Math.round(getTotalCartAmmount())}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="empty-cart">Your cart is Empty</h1>
      )}
    </div>
  );
}

export default CartPage;
