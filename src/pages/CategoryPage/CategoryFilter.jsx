import React, { useState } from "react";

function CategoryFilter() {
  const [filterBG, setFilterBG] = useState("#ffff");
  return (
    <div className="category-filter" style={{ backgroundColor: filterBG }}>
      <div className="filter-container">
        <form className="form-selector">
          <label>Price</label>
          <select className="filter-selector" name="price" id="price">
            <option value="#">$0.00-$100.00</option>
            <option value="#">$100.00-$100.00</option>
            <option value="#">$300.00-$700.00</option>
          </select>
        </form>
        <div className="form-selector">
          <label>Color</label>
          <div className="color-btn">
            <button
              className="white"
              style={{ backgroundColor: "#f2ffff" }}
              onClick={() => {
                setFilterBG("#ffff");
              }}
            ></button>
            <button
              className="blue active-color"
              style={{ backgroundColor: "#43c0cf" }}
              onClick={() => {
                setFilterBG("#43c0cf");
              }}
            ></button>
            <button
              className="grey"
              style={{ backgroundColor: "#3d402f" }}
              onClick={() => {
                setFilterBG("#3d402f");
              }}
            ></button>
            <button
              className="green"
              style={{ backgroundColor: "#4aaf00" }}
              onClick={() => {
                setFilterBG("#4aaf00");
              }}
            ></button>
            <button
              className="purple"
              style={{ backgroundColor: "#315bbd" }}
              onClick={() => {
                setFilterBG("#315bbd");
              }}
            ></button>
            <button
              className="orange"
              style={{ backgroundColor: "#ec6115" }}
              onClick={() => {
                setFilterBG("#ec6115");
              }}
            ></button>
            <button
              className="bg-color"
              style={{ backgroundColor: "#efead7" }}
              onClick={() => {
                setFilterBG("#efead7");
              }}
            ></button>
          </div>
        </div>
      </div>
      <div className="filter-container">
        <form className="form-selector">
          <label>Brands</label>
          <select className="filter-selector" name="price" id="price">
            <option value="#">Brand Name</option>
            <option value="#">Brand Name</option>
            <option value="#">Brand Name</option>
          </select>
        </form>
        <form className="form-selector">
          <label>Sort by</label>
          <select className="filter-selector" name="price" id="price">
            <option value="#">Price</option>
            <option value="#">Relevance</option>
            <option value="#">Date Added</option>
          </select>
        </form>
      </div>
      <div className="filter-container">
        <form className="form-selector">
          <label>Size</label>
          <select className="filter-selector" name="price" id="price">
            <option value="#">Small</option>
            <option value="#">Medium</option>
            <option value="#">Large</option>
          </select>
        </form>
        <form className="form-selector">
          <label>Show</label>
          <select className="filter-selector" name="price" id="price">
            <option value="#">16 per page</option>
            <option value="#">32 per page</option>
            <option value="#">64 per page</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default CategoryFilter;
