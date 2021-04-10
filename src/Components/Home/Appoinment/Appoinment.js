import React from "react";
import "./Appoinment.css";
import appointmentdoctor from "../../../images/5790-removebg.png";

const Appoinment = () => {
  return (
    <section className="appoinment">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={appointmentdoctor} className="img-fluid" alt="" />
          </div>
          <div className="col-md-7 text-white align-self-center">
            <h5 className="text-info">APPOINMENT</h5>
            <h2>Make an appoinment Today</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              consectetur aliquid enim esse pariatur porro atque alias
              doloribus, nostrum doloremque?
            </p>
            <button className="btn btn-info">
              <h5>Learn More</h5>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;
