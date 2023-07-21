import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./CategoryPage.scss";
import CategoryProducts from "./CategoryProducts";
import CategoryFilter from "./CategoryFilter";
import SwiperMain from "../../components/Swiper/SwiperMain";

// Media Querry
import MediaQuery from "react-responsive";

function CategoryPage() {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <div className="category-page">
      <header className="category-header">
        <p>
          <Link to="/">Home</Link> / Category Landing Page
        </p>
        <div className="category-header-title">
          {/* <hr style={{ width: 330 }} /> */}
          <h1>Services</h1>
          {/* <hr style={{ width: 330 }} /> */}
        </div>
      </header>
      <MediaQuery maxWidth={350}>
        <p
          className="showFilter"
          style={{ color: "#84bc22", cursor: "pointer" }}
          onClick={() => {
            setShowFilter(!showFilter);
          }}
        >
          Hide Filter
        </p>
      </MediaQuery>
      {showFilter && <CategoryFilter />}
      <p>12,931 results in apparel</p>
      <CategoryProducts />
      <MediaQuery minWidth={850}>
        <SwiperMain />
      </MediaQuery>
    </div>
  );
}

export default CategoryPage;
