import React, { useState } from "react";
import BookingsModal from "./BookingsModal";

const BookingsInfoCard = ({ bookingCard, date }) => {
  const { subject, visitingHour, totalSpace } = bookingCard;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section className="col-md-4 mb-3 ">
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <div className="card-title">
            <h3 className="text-info">{subject}</h3>
            <h5>{visitingHour}</h5>
            <p className="text-secondary">{totalSpace} spaces available</p>
            <button onClick={openModal} className="btn btn-info">
              Book appointment
            </button>
            <BookingsModal
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              appointmentOn={subject}
              date={date}
            ></BookingsModal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingsInfoCard;
