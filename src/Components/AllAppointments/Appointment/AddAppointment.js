import React, { useState } from "react";
import Footer from "../../CommonComponents/Footer/Footer";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import Bookings from "../Booking/Bookings";

const AddAppointment = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const handleSelectedDate = (date) => {
    setSelectDate(date);
    console.log(date);
  };
  return (
    <div>
      <AppointmentHeader
        handleSelectedDate={handleSelectedDate}
        selectDate={selectDate}
      ></AppointmentHeader>
      <Bookings date={selectDate}></Bookings>
      <Footer></Footer>
    </div>
  );
};

export default AddAppointment;
