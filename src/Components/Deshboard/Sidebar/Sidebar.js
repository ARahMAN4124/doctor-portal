import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { MyContext } from "../../../App";

const Sidebar = () => {
  const [logInUser, setLogInUser] = useContext(MyContext);
  const [isDoctor, setIsDoctor] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5050/isDoctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: logInUser.email }),
    })
      .then((result) => result.json())
      .then((data) => {
        setIsDoctor(data);
      });
  }, []);
  return (
    <nav className="dash-nav ">
      <ul className="nav  py-5 px-4 flex-column">
        <li className="nav-item pt-2">
          <Link to="/dashboard" className="nav-link text-light ">
            <FontAwesomeIcon icon={faGripHorizontal} /> Dashboard
          </Link>
        </li>
        <li className="nav-item  pt-2">
          <Link to="/" className="nav-link text-light ">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        {isDoctor && (
          <div>
            <li className="nav-item  pt-2">
              <Link to="/Appointment" className="nav-link text-light">
                <FontAwesomeIcon icon={faCalendar} /> Appointment
              </Link>
            </li>
            <li className="nav-item  pt-2">
              <Link to="/allPatients" className="nav-link text-light">
                <FontAwesomeIcon icon={faUsers} /> Patients
              </Link>
            </li>
            <li className="nav-item  pt-2">
              <Link to="/addDoctor" className="nav-link text-light">
                <FontAwesomeIcon icon={faUserPlus} />
                Add Doctor
              </Link>
            </li>
            <li className="nav-item  pt-2">
              <Link to="/Prescriptions" className="nav-link text-light">
                <FontAwesomeIcon icon={faGripHorizontal} />
                Prescriptions
              </Link>
            </li>
            <li className="nav-item  pt-2">
              <Link to="/setting" className="nav-link text-light">
                <FontAwesomeIcon icon={faCog} />
                Setting
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
