import React from "react";
import Product from "../../components/ProductMain/Product";
import { PRODUCT } from "../../data/ProductData";
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";

function Products() {
  const [visibleItems, setVisible] = useState(8);
  const [isToggle, setIsToggle] = useState(false);
  const [buttonText, setButtonText] = useState("LOAD MORE");

  // Load More Button Logic
  const showMore = () => {
    if (visibleItems == 8 && isToggle == false) {
      setVisible(12);
      setIsToggle(true);
      setButtonText("LOAD LESS");
    } else {
      setVisible(8);
      setIsToggle(false);
      setButtonText("LOAD MORE");
    }
  };
  return (
    <div className="products-home">
      <h1>Popular Items</h1>

      {/* Products Map */}
      <div className="product">
        {PRODUCT.slice(0, visibleItems).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      {/* Load More Button */}
      <button
        className="load-more"
        onClick={() => {
          showMore();
        }}
      >
        {buttonText}
        {/* <AiOutlineReload /> */}
      </button>
    </div>
  );
}

export default Products;
