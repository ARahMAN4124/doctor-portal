import React from "react";
import HeaderCardInfo from "./HeaderCardInfo";
import {
  faMapMarker,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const CardInfo = () => {
  const cardInfo = [
    {
      icon: faClock,
      title: "Opening Hours",
      description: "lore Lorem ipsum, dolor sit amet consectetur",
      background: "info",
    },
    {
      icon: faMapMarker,
      title: "Visit Our Location",
      description: "Brooklyn, NY 100036,united states",
      background: "dark",
    },
    {
      icon: faPhone,
      title: "Contact us now",
      description: " +0247541",
      background: "info",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {cardInfo.map((cardInfo) => (
          <HeaderCardInfo cardInfo={cardInfo}></HeaderCardInfo>
        ))}
      </div>
    </div>
  );
};

export default CardInfo;
