import React from "react";
import "./ExceptionalDental.css";
import exceptionalImg from "../../../images/Mask Group 3.png";

const ExceptionalDental = () => {
  return (
    <section className="exceptionalDental container ">
      <div className="row">
        <div className="col-md-5">
          <img src={exceptionalImg} className="img-fluid rounded" alt="" />
        </div>
        <div className="col-md-7 align-self-center">
          <h2>
            Exceptional Dental <br /> Care, on Your Terms
          </h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            exercitationem vel corrupti deleniti? Ipsam eos dignissimos animi.
            Porro, ut distinctio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea, reiciendis. ut distinctio. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ea, reiciendis. ut
            distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ea, reiciendis
          </p>

          <button className="btn btn-info">
            <h6>Learn More</h6>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExceptionalDental;
