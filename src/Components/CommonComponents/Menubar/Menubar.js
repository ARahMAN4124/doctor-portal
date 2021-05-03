import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2  mb-lg-0">
            <li className="nav-item mr-4">
              <Link className="nav-link active text-info" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link className="nav-link text-info" to="/addAppointment">
                Appointments
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/dashboard" className="nav-link text-info">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <p className="nav-link text-info">Contact Us</p>
            </li>
            <li className="nav-item mr-4">
              <Link to="/logIn" className="nav-link text-info">
                LogIn
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link to="/dashboard" className="nav-link text-info">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
