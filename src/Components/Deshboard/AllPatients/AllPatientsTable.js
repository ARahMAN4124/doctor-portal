import React from "react";

const AllPatientsTable = ({ allPatients }) => {
  return (
    <div>
      <h2 className="py-5">Patients</h2>
      <div className="m-2 p-4 bg-white">
        <h2 className="text-info">All Patient</h2>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Weight</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {allPatients.map((patient, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{patient.name}</td>
                <td>{patient.gender}</td>
                <td>{patient.age}</td>
                <td>{patient.weight}</td>
                <td>{patient.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPatientsTable;
