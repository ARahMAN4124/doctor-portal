import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";
import Appointments from "../Appointments/Appointments";
import { MyContext } from "../../../App";

const Dashboard = () => {
  const [logInUser, setLogInUser] = useContext(MyContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const dateHandle = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    fetch("http://localhost:5050/AppointmentsByDate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ date: selectedDate, email: logInUser.email }),
    })
      .then((res) => res.json())
      .then((appointments) => {
        setAppointments(appointments);
      });
  }, [selectedDate]);
  return (
    <section className="containerStyle">
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5 col-sm-12 col-12">
          <h2 className="py-3 text-info">Appointment</h2>
          <Calendar onChange={dateHandle} value={selectedDate} />
        </div>
        <div className="col-md-5 col-sm-12 col-12">
          <Appointments
            appointments={appointments}
            date={selectedDate}
          ></Appointments>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
