import React from "react";

import "../Atribut/Atribut.scss";

function Atribut({ atributIcon, title, text }) {
  return (
    <div className="atribut">
      <img src={atributIcon} alt="Atribut Icon" />
      <div className="atribut-content">
        <h1>{title}</h1>
        {text}
      </div>
    </div>
  );
}

export default Atribut;
