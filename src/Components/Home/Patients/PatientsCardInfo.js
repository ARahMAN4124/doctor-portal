import React from "react";

const PatientsCardInfo = ({ patient }) => {
  return (
    <div className="col-md-4">
      <div className="border p-4">
        <div>
          <p className="text-secondary">{patient.description}</p>
        </div>
        <div className="d-flex align-items-center pt-4">
          <div className="mr-2">
            <img src={patient.img} style={{ width: "60px" }} alt="" />
          </div>
          <div>
            <h4 className="text-info">{patient.name}</h4>
            <p>{patient.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsCardInfo;
