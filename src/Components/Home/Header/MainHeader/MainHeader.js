import React from "react";
import chair from "../../../../images/Mask Group 1.png";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <main className="MainHeader">
      <div className="container">
        <div className=" row d-flex align-items-center pt-5">
          <div className="col-md-5">
            <h1>
              Your New Smile <br /> Starts Here
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              ducimus ut omnis, dolores atque exercitationem!
            </p>
            <button className="btn btn-info">Get Appointment</button>
          </div>
          <div className="col-md-7">
            <img src={chair} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHeader;
