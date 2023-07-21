import React from "react";

import { PRODUCTcat } from "../../data/CategoryPageData";
import CategoryProduct from "../CategoryPage/CategoryProduct";

function PopularItems() {
  return (
    <div className="popular-items">
      <div
        className="product-header-title"
        style={{ justifyContent: "center" }}
      >
        <hr style={{ width: "40%" }} />
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>POPULAR ITEMS</h1>
        <hr style={{ width: "40%" }} />
      </div>
      <div className="popular-products">
        <div className="category-product">
          {PRODUCTcat.slice(0, 4).map((product) => (
            <CategoryProduct key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularItems;
