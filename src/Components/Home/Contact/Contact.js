import React from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container py-5 text-center">
        <h5 className=" text-info">CONTACT US</h5>
        <h2 className="text-white">Always Connect with us</h2>
        <div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </section>
  );
};

export default Contact;
