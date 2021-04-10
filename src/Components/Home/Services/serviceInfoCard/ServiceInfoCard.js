import React from "react";

const serviceInfoCard = ({ InfoCard }) => {
  console.log(InfoCard);
  return (
    <div className="col-md-4">
      <div className="d-flex infoCard">
        <div className="text-center">
          <img src={InfoCard.img} className="pt-2" alt="" />
          <h4 className="pt-2">{InfoCard.title}</h4>
          <p className="pt-2 text-secondary">{InfoCard.description}</p>
        </div>
      </div>
    </div>
  );
};

export default serviceInfoCard;
