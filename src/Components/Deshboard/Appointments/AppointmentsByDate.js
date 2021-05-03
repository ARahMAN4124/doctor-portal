import React from "react";

const AppointmentsByDate = ({ appointments }) => {
  return (
    <div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((data) => (
            <tr>
              <th>{data.name}</th>
              <td>{data.phone}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsByDate;
