import React from "react";
import AppointmentsByDate from "./AppointmentsByDate";

const Appointments = ({ appointments, date }) => {
  return (
    <div className="container">
      <h2 className="py-3">Appointment on {date.toDateString()}</h2>
      {appointments.length ? (
        <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
      ) : (
        <div className="pt-3">
          <h2 className="text-danger">No appointments for this date</h2>
        </div>
      )}
    </div>
  );
};

export default Appointments;
