import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import DoctorCard from "./DoctorCard";
import Doctor from "../../../images/5790-removebg.png";
const Doctors = () => {
  const doctor = [
    {
      img: Doctor,
      name: "Dr.Caudi",
      phone: "+01541504124",
      icon: faPhone,
    },
    {
      img: Doctor,
      name: "Dr. A.Rahman",
      phone: "+01541504124",
      icon: faPhone,
    },
    {
      img: Doctor,
      name: "Dr. Razu",
      phone: "+01541504124",
      icon: faPhone,
    },
  ];
  return (
    <section className="doctors py-5">
      <div className="container">
        <div>
          <h3 className="text-info text-center">Our Doctors</h3>
        </div>
        <div className="row pt-4">
          {doctor.map((doctorCard) => (
            <DoctorCard doctorCard={doctorCard}></DoctorCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
