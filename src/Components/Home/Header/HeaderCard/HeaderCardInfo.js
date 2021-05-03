import React from "react";
import "./HeaderCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderCardInfo = ({ cardInfo }) => {
  return (
    <div className="col-md-4 text-white">
      <div
        className={`p-4 d-flex cardInfo justify-content-center rounded  ${cardInfo.background}`}
      >
        <div className="mr-2">
          <FontAwesomeIcon className="info-icon" icon={cardInfo.icon} />
        </div>
        <div className="">
          <h5>{cardInfo.title}</h5>
          <p>{cardInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderCardInfo;
