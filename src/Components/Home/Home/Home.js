import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Services from "../Services/Services";
import ExceptionalDental from "../ExceptionalDental/ExceptionalDental";
import Appoinment from "../Appoinment/Appoinment";
import Doctors from "../Doctors/Doctors";
import Patients from "../Patients/Patients";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <ExceptionalDental></ExceptionalDental>
      <Appoinment></Appoinment>
      <Patients></Patients>
      <Blogs></Blogs>
      <Doctors></Doctors>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
