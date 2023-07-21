import React from "react";

function FooterContact() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="section section-1">
      <p>
        © Copyright {currentYear}
        <br /> All Rights Reserved.
      </p>
      <p id="ul-title">CONTACT</p>
      <p>
        Headquarters:
        <br />
        5600, Blvd. des Galeries, Bur <br />
        530 Québec, Québec G2K 2H6
      </p>
      <a href="mailto:contact@osf-global.com">contact@osf-global.com</a>
      <a href="tel:8885484344">+1 (888) 548-4344</a>
    </section>
  );
}

export default FooterContact;
