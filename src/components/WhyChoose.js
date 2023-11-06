import React from "react";
import Patient from "../assets/Patient.png";
import "./WhyChoose.css";
const WhyChoose = () => {
  return (
    <div className="why_container">
      <div className="why_content">
        <div className="why_us">why Choose Us</div>
        <div className="why_heading">Comprehensive Dental Services</div>
        <ul>
          <li className="why_li">
            <span className="span_bold">Experienced Professionals: </span>{" "}
            <span className="span_lite">
              Our team consists of highly skilled and knowledgeable dental
              experts.
            </span>
          </li>

          <li className="why_li">
            <span className="span_bold">Experienced Professionals: </span>{" "}
            <span className="span_lite">
              Our team consists of highly skilled and knowledgeable dental
              experts.
            </span>
          </li>

          <li className="why_li">
            <span className="span_bold">State-of-the-Art Technology: </span>{" "}
            <span className="span_lite">
              We invest in the latest dental technology to provide the best
              care.
            </span>
          </li>

          <li className="why_li">
            <span className="span_bold">Compassionate Care: </span>{" "}
            <span className="span_lite">
              We treat every patient with empathy and understanding.
            </span>
          </li>

          <li className="why_li">
            <span className="span_bold">Patient Education: </span>{" "}
            <span className="span_lite">
              We believe in educating our patients about their oral health to
              make informed decisions.
            </span>
          </li>
        </ul>
      </div>
      <img className="why_img" src={Patient} alt="image of a doctor" />
    </div>
  );
};

export default WhyChoose;
