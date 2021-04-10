import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorCard = ({ doctorCard }) => {
  console.log(doctorCard);
  return (
    <div className="col-md-4 text-center">
      <div>
        <img
          src={doctorCard.img}
          className="img-fluid"
          style={{ height: "250px" }}
          alt=""
        />
        <h5>{doctorCard.name}</h5>
        <p>
          <FontAwesomeIcon
            style={{ color: "rgb(0, 168, 173)" }}
            icon={doctorCard.icon}
          />{" "}
          {doctorCard.phone}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
