import React from "react";
import FooterNavOne from "./FooterNavOne";
import FooterNavTwo from "./FooterNavTwo";

const Footer = () => {
  return (
    <section className="footer pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 pt-4">
            <FooterNavOne></FooterNavOne>
          </div>
          <div className="col-md-3">
            <h4 className="text-info">Serviecs</h4>
            <FooterNavTwo></FooterNavTwo>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
