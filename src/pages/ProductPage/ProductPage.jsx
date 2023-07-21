import React from "react";

import "./ProductPage.scss";

import ProductDetails from "./ProductDetails";

// Media Query
import MediaQuery from "react-responsive";

import { Link } from "react-router-dom";
import PopularItems from "./PopularItems";
import Atribut from "../../components/Atribut/Atribut";
import Atributes from "../HomePage/Atributes";
import MobileSwiper from "../../mobile/MobileSwiper/MobileSwiper";
import Product from "../../components/ProductMain/Product";

function ProductPage() {
  return (
    <>
      <div className="product-page">
        <header className="product-header">
          <p>
            <Link to="/">Home</Link> / <Link>Osf Theme</Link> / Ruffle Front
            V-Neck Cardigan
          </p>
          <div className="product-header-title">
            {/* <hr style={{ Width: "10%" }} /> */}
            <h1>Ruffle Front V-Neck Cardigan</h1>
            {/* <hr style={{ Width: "10%" }} /> */}
          </div>
        </header>
        <ProductDetails />

        <MediaQuery minWidth={401}>
          <PopularItems />
        </MediaQuery>
        <MediaQuery maxWidth={400}>
          <MobileSwiper color={"#f1edea"} slideNumber={6} component={Product} />
        </MediaQuery>
      </div>
      <Atributes />
    </>
  );
}

export default ProductPage;
