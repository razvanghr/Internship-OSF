import React from "react";

import { Link } from "react-router-dom";

function ServiceList({ LIST }) {
  return (
    <div>
      <ul className="service-list">
        {LIST.map((title, index) => {
          return (
            <li key={index}>
              <Link to="/cart">{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ServiceList;
