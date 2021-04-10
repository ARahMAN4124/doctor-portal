import React from "react";
import "./Patients.css";
import img1 from "../../../images/Ellipse 1.png";
import img2 from "../../../images/Ellipse 2.png";
import img3 from "../../../images/Ellipse 3.png";
import PatientsCardInfo from "./PatientsCardInfo";

const Patients = () => {
  const patientsInfo = [
    {
      img: img1,
      name: "Winson Herry",
      country: "California",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque illum saepe repudiandae autem accusantium delectus culpa natus tenetur, iusto quisquam accusamus laboriosam laborum eius temporibus vel ut totam animi eveniet, nesciunt consequuntur soluta voluptatem dicta. quasi ducimus quos nisi veniam.",
    },
    {
      img: img2,
      name: "Winson Herry",
      country: "California",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque illum saepe repudiandae autem accusantium delectus culpa natus tenetur, iusto quisquam accusamus laboriosam laborum eius temporibus vel ut totam animi eveniet, nesciunt consequuntur soluta voluptatem dicta. quasi ducimus quos nisi veniam.",
    },
    {
      img: img3,
      name: "Winson Herry",
      country: "California",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos neque illum saepe repudiandae autem accusantium delectus culpa natus tenetur, iusto quisquam accusamus laboriosam laborum eius temporibus vel ut totam animi eveniet, nesciunt consequuntur soluta voluptatem dicta. quasi ducimus quos nisi veniam.",
    },
  ];
  return (
    <section className="patients py-5">
      <div className="container">
        <div>
          <h3 className="text-info">TESTIMONIAL</h3>
          <h2>
            What's Our Patients <br /> Says{" "}
          </h2>
        </div>
        <div className="row">
          {patientsInfo.map((patient) => (
            <PatientsCardInfo patient={patient}></PatientsCardInfo>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patients;
