import React from "react";
import Atribut from "../../components/Atribut/Atribut";

import focusImage from "../../assets/MainImages/focus-icon.png";
import methodImage from "../../assets/MainImages/method-icon.png";
import knowledgeImage from "../../assets/MainImages/knowledge-icon.png";

function Atributes() {
  return (
    <div className="atributes">
      <Atribut
        atributIcon={focusImage}
        title={"FOCUS"}
        text={
          <p>
            Our unwavering focus on superior
            <br /> service delivery and building next <br />
            generation competencies
          </p>
        }
      />
      <Atribut
        atributIcon={methodImage}
        title={"METHOD"}
        text={
          <p>
            "A standardized methodology designed <br /> to deliver measurable
            business results
            <br /> and predictable costs
          </p>
        }
      />
      <Atribut
        atributIcon={knowledgeImage}
        title={"KNOWLEDGE"}
        text={
          <p>
            A highly skilled, proactive workforce that
            <br />
            reliably improves each client's ROI while
            <br />
            mitigating their business risk
          </p>
        }
      />
    </div>
  );
}

export default Atributes;
