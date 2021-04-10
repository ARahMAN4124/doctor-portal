import React from "react";

const ContactForm = () => {
  return (
    <div className="pt-5">
      <form action="" style={{ width: "70%" }} className="mx-auto">
        <div className="mb-3">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Email*"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Subject*"
          />
        </div>
        <div className="mb-3">
          <textarea
            name=""
            id=""
            cols="30"
            placeholder="Your Text*"
            className="form-control form-control-lg"
            rows="7"
          ></textarea>
        </div>
        <div className="mb-3 text-center">
          <input type="button" className="btn btn-info" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
