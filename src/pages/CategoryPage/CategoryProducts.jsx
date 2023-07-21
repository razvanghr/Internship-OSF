import React from "react";
import Product from "../../components/ProductMain/Product";
import { PRODUCTcat } from "../../data/CategoryPageData";
import { useState } from "react";
import CategoryProduct from "./CategoryProduct";

function CategoryProducts() {
  const [visibleItems, setVisible] = useState(16);
  const [isToggle, setIsToggle] = useState(false);
  const [buttonText, setButtonText] = useState("LOAD MORE");

  // Load More Button Logic
  const showMore = () => {
    if (visibleItems == 16 && isToggle == false) {
      setVisible(20);
      setIsToggle(true);
      setButtonText("LOAD LESS");
    } else {
      setVisible(16);
      setIsToggle(false);
      setButtonText("LOAD MORE");
    }
  };
  return (
    <div className="category-products">
      {/* Products Map */}
      <div className="category-product">
        {PRODUCTcat.slice(0, visibleItems).map((product) => (
          <CategoryProduct key={product.id} data={product} />
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

export default CategoryProducts;
