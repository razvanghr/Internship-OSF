import React, { createContext, useState } from "react";
import { PRODUCT } from "../data/ProductData";

export const ShopContext = createContext(null);

// Cart
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCT.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

// Wishlist
const getDefaultWhishlist = () => {
  let whishlist = {};
  for (let i = 1; i < PRODUCT.length + 1; i++) {
    whishlist[i] = 0;
  }
  return whishlist;
};

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlistItems, setWishlistItems] = useState(getDefaultWhishlist());

  //   Adauga Cantitate Produsului
  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  // Adauga Produs in cos (ProductPage)
  const addToCartProduct = (itemID, qunt) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + qunt }));
  };

  // Redu Cantitatea Produsului
  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  //   Sterge Produsul din Cos
  const removeAllFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: (prev[itemID] = 0) }));
  };

  const updateCartItemCount = (newAmmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmmount }));
  };

  // Numarul de produse din Cos
  const getCartItemCount = () => {
    let totalItemCount = 0;
    for (const item in cartItems) {
      totalItemCount += cartItems[item];
    }
    return totalItemCount;
  };

  // Adauga la wishlist
  const addToWishlist = (itemID) => {
    setWishlistItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  // Numrul de produse din Whishlist
  const getWishlistItemCount = () => {
    let totalItemCount = 0;
    for (const item in wishlistItems) {
      totalItemCount += wishlistItems[item];
    }
    return totalItemCount;
  };

  //   Calculeaza suma total
  const getTotalCartAmmount = () => {
    let suma = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemPrice = PRODUCT.find((service) => service.id === Number(item));
        suma += cartItems[item] * itemPrice.price;
      }
    }

    return suma;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    getTotalCartAmmount,
    updateCartItemCount,
    getCartItemCount,
    addToWishlist,
    getWishlistItemCount,
    addToCartProduct,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
