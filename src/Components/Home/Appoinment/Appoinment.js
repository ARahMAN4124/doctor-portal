import React from "react";
import "./Appointment.css";
import appointmentDoctor from "../../../images/5790-removebg.png";

const Appointment = () => {
  return (
    <section className="appoinment">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={appointmentDoctor} className="img-fluid" alt="" />
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

export default Appointment;
