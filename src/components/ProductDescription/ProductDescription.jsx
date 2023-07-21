import React from "react";

import "./ProductDescription.scss";
import { useState } from "react";

function ProductDescription() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="description">
      <div className="titles">
        <h1
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? "active-tab" : ""}
        >
          Description
        </h1>
        <h1
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? "active-tab" : ""}
        >
          Additional Information
        </h1>
        <h1
          onClick={() => handleTabClick(3)}
          className={activeTab === 3 ? "active-tab" : ""}
        >
          Reviews(3)
        </h1>
      </div>
      {activeTab === 1 && (
        <p className="description-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          porro quae, dignissimos, consequuntur architecto impedit sapiente
          illum dolore aliquid nisi tenetur harum saepe odio, inventore debitis
          eveniet praesentium modi ipsam?
        </p>
      )}
      {activeTab === 2 && (
        <p className="description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          magni voluptatem exercitationem voluptates atque nesciunt blanditiis
          obcaecati deleniti aut magnam aliquid ad sapiente quia fugit
          laudantium, ducimus incidunt? Atque, nobis? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam magni voluptatem exercitationem
          voluptates atque nesciunt blanditiis obcaecati deleniti aut magnam
          aliquid ad sapiente quia fugit laudantium, ducimus incidunt? Atque,
          nobis?
        </p>
      )}
      {activeTab === 3 && (
        <p className="description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          magni voluptatem exercitationem voluptates atque nesciunt blanditiis
          obcaecati deleniti aut magnam aliquid ad sapiente quia fugit
          laudantium, ducimus incidunt? Atque, nobis?
        </p>
      )}
    </div>
  );
}

export default ProductDescription;
