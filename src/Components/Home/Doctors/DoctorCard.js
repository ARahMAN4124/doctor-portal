import React from "react";

const DoctorCard = ({ doctorCard }) => {
  return (
    <div className="col-md-4 text-center">
      <div>
        <img
          src={doctorCard.imgUrl}
          className="img-fluid rounded"
          style={{ height: "200px", width: "200px" }}
          alt=""
        />
        <h5>{doctorCard.name}</h5>
        <p>{doctorCard.email}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
