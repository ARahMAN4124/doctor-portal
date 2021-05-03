import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import AddDoctorForm from "./AddDoctorForm";

const AddDoctor = () => {
  return (
    <section className="containerStyle">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <AddDoctorForm />
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
