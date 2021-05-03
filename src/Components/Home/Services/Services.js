import React from "react";
import "./Services.css";
import dental from "../../../images/001-dental.png";
import tooth1 from "../../../images/tooth (1).png";
import tooth from "../../../images/tooth.png";
import ServiceInfoCard from "./serviceInfoCard/ServiceInfoCard";
const Services = () => {
  const serviceInfo = [
    {
      img: dental,
      title: "Fluoride Treatment",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia consectetur adipisicing elit. Officia",
    },
    {
      img: tooth1,
      title: "Cavit Filling",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia consectetur adipisicing elit. Officia",
    },
    {
      img: tooth,
      title: "Teath Whitening",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiaconsectetur adipisicing elit. Officia",
    },
  ];
  return (
    <section className="service container">
      <div className="text-center text-uppercase">
        <h5 className=" text-info">Our Services</h5>
        <h2 className="text-dark">Services We Provide</h2>
      </div>
      <div className="row pt-5">
        {serviceInfo.map((InfoCard, index) => (
          <ServiceInfoCard
            key={index + 1}
            InfoCard={InfoCard}
          ></ServiceInfoCard>
        ))}
      </div>
    </section>
  );
};

export default Services;
