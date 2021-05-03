import axios from "axios";
import React, { useState } from "react";

const AddDoctorForm = () => {
  const doctorInfo = {
    name: "",
    email: "",
  };
  const [doctor, setDoctor] = useState(doctorInfo);
  const [doctorImg, setDoctorImg] = useState("");

  const handleBlur = (e) => {
    const newDoctor = { ...doctor };
    newDoctor[e.target.name] = e.target.value;
    setDoctor(newDoctor);
  };

  const handleAddDoctor = (e) => {
    const addDoctor = {
      name: doctor.name,
      email: doctor.email,
      imgUrl: doctorImg,
    };

    console.log(addDoctor);

    fetch("http://localhost:5050/addDoctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addDoctor),
    }).then((res) => {
      console.log(res);
    });

    e.preventDefault();
  };

  const handleImgUpload = (e) => {
    const fileData = new FormData();
    fileData.append("key", "de72c60033d44091a0d2c4e2010d3736");
    fileData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", fileData)
      .then(function (response) {
        setDoctorImg(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="m-5 p-4 border shadow rounded">
      <form onSubmit={handleAddDoctor}>
        <div className="mb-3">
          <input
            onBlur={handleBlur}
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            onBlur={handleBlur}
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3 ">
          <input
            type="file"
            onChange={handleImgUpload}
            className="form-control bg-info"
          />
        </div>
        {}
        <button disabled={!doctorImg} type="submit" className="btn btn-info">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddDoctorForm;
