import React from "react";
import "./Appointment.css";
import AppointmentImg from "../assets/Appoinment_img.png";
const Appointment = () => {
  return (
    <div className="appointment_container">
      <div className="appointment_card_container">
        <img src={AppointmentImg} className="appointment_card_img" />
        <div className="appointment_form">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
