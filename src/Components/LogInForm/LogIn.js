import React from "react";
import logImg from "../../images/Group 140.png";
import "./Login.css";
import LogInForm from "./LogInForm";

const LogIn = () => {
  return (
    <div className="container-fluid logInPage">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <LogInForm></LogInForm>
        </div>
        <div className="col-md-6">
          <img src={logImg} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
