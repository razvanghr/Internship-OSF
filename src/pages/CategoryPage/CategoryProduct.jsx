import React from "react";

function CategoryProduct({ data }) {
  return (
    <div className="category-product-card">
      <img src={data.productImage} alt="Product Image" />
      <p style={{ height: "50px" }}>{data.productName} </p>
      <p style={{ color: "#bdc3c7" }}>${data.price}</p>
    </div>
  );
}

export default CategoryProduct;
