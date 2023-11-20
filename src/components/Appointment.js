import React from "react";
import "./Appointment.css";
import AppointmentImg from "../assets/Appoinment_img.png";
import arrowImage from "../assets/Vector.png";
const Appointment = () => {
  return (
    <div className="appointment_container">
      <div className="appointment_card_container">
        <img src={AppointmentImg} className="appointment_card_img" />
        <div className="appointment_form">
          <div className="appointment_heading">Free Consultation</div>
          <div className="appointment_form_input">
            <input className="appointment_input" placeholder="Full Name*" />
            <input
              className="appointment_input"
              placeholder="Last Name*"
            />
          </div>
      
          <div className="appointment_form_input">
            <input className="appointment_input" placeholder="Full Name*" />
            <input
              className="appointment_input"
              placeholder="I'm interested in*"
            />
          </div>
          <button className="appointment_btn">
            <div className="appointment_btn_content">
              Get a Free Consultation
              <img className="appointment_arrow_img" src={arrowImage} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
