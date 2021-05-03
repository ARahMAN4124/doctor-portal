import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import AllPatientsTable from "./AllPatientsTable";

const AllPatients = () => {
  const [allPatients, setAllPatients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5050/allPatients")
      .then((res) => res.json())
      .then((data) => {
        setAllPatients(data);
      });
  }, []);
  return (
    <section className="containerStyle">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <AllPatientsTable allPatients={allPatients}></AllPatientsTable>
        </div>
      </div>
    </section>
  );
};

export default AllPatients;
