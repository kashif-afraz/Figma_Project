import React from "react";
import "./Abouths.css";
import aboutDoc from "../assets/About Doctor.png";
import arrowImg from "../assets/Vector.png";
const Aboutus = () => {
  return (
    <div className="about_container">
      <img className="about_img" src={aboutDoc} alt="image of a doctor" />
      <div className="about_content">
        <div className="about_us">About Us</div>
        <div className="about_heading">Patient-Centered Care</div>
        <div className="about_paras">
          <div className="about_para1">
            We are dedicated to providing exceptional dental care in a warm and
            welcoming environment. Our team of experienced, compassionate, and
            highly skilled professionals is here to ensure your dental
            experience is comfortable and stress-free.
          </div>
          <div className="about_para2_heading">Our Mission</div>
          <div className="about_para2">
            At 57Dentcare, our mission is to promote optimal oral health and
            create lasting, confident smiles.{" "}
          </div>
          
          <button className="about_button">
            <span className="button_span">Learn More</span>{" "}
            <img id="arrow_about" className="arrow_img" src={arrowImg} />{" "}
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
