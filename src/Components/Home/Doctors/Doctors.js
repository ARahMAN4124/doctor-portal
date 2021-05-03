import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);

  return (
    <section className="doctors py-5">
      <div className="container">
        <div>
          <h3 className="text-info text-center">Our Doctors</h3>
        </div>
        <div className="row pt-4">
          {doctors.map((doctorCard, index) => (
            <DoctorCard key={index + 1} doctorCard={doctorCard}></DoctorCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
