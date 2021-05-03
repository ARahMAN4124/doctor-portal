import React from "react";
import "./AppointmentHeader.css";
import Menubar from "../../CommonComponents/Menubar/Menubar";
import chair from "../../../images/Mask Group 1.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ handleSelectedDate, selectDate }) => {
  return (
    <header className="appointmentHeader">
      <Menubar></Menubar>
      <main className="MainHeader">
        <div className="container">
          <div className=" row d-flex align-items-center pt-5">
            <div className="col-md-5">
              <h1 className="mb-5">Appointment</h1>
              <Calendar onChange={handleSelectedDate} value={selectDate} />
            </div>
            <div className="col-md-7">
              <img src={chair} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </main>
    </header>
  );
};

export default AppointmentHeader;
