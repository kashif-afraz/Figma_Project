import React from "react";
import "./Services.css";
import serviceImage1 from "../assets/service image 1.png";
import serviceImage2 from "../assets/female-dentist-with-dentistry-tools-isolated.png";
import serviceImage3 from "../assets/dentist-sergeon-wear-isolated.png";
import serviceImage4 from "../assets/feeling-happy-surprised-realizing-solution-idea 1.png";
import serviceImage5 from "../assets/excited-female-doctor-asian-physician-holding-clipboard-raising-pen-up-found-solution-idea-standing-medical-face-mask-white-background 1.png";
import serviceImage6 from "../assets/front-view-young-female-nurse-white-medical-suit-smiling-blue-desk-medicine-hospital-doctor 1.png";

const Services = () => {
  return (
    <div className="services_body">
      <div className="services_h1">Satisfy Solution</div>
      <div className="services_h2">The Best Dental Treatment</div>
      <div className="services_card_container">
        <div className="services_cards">
          <div className="services_card_inner">
            <div className="services_card_h1">Teeth Whitening</div>
            <div className="services_card_h2">
              Cosmetic treatment to enhance the whiteness of teeth
            </div>
            <img className="services_card_img0" src={serviceImage1} alt="" />
            <button className="service_btn">
              <div className="service_button_contetnt">Read More</div>
            </button>
          </div>
        </div>

        <div className="services_cards">
          <div className="services_card_inner">
            <div className="services_card_h1">Teeth Whitening</div>
            <div className="services_card_h2">
              Cosmetic treatment to enhance the whiteness of teeth
            </div>
            <img className="services_card_img1" src={serviceImage2} alt="" />
            <button className="service_btn">
              <div className="service_button_contetnt">Read More</div>
            </button>
          </div>
        </div>

        <div className="services_cards">
          <div className="services_card_inner">
            <div className="services_card_h1">Teeth Whitening</div>
            <div className="services_card_h2">
              Cosmetic treatment to enhance the whiteness of teeth
            </div>
            <img className="services_card_img2" src={serviceImage3} alt="" />
            <button className="service_btn">
              <div className="service_button_contetnt">Read More</div>
            </button>
          </div>
        </div>
      </div>

      <div className="services_card_container">
        <div className="services_cards">
          <div className="services_card_inner">
            <div className="services_card_h1">Teeth Whitening</div>
            <div className="services_card_h2">
              Cosmetic treatment to enhance the whiteness of teeth
            </div>
            <img className="services_card_img2" src={serviceImage4} alt="" />
            <button className="service_btn">
              <div className="service_button_contetnt">Read More</div>
            </button>
          </div>
        </div>

        <div className="services_cards">
          <div className="services_card_inner">
            <div className="services_card_h1">Teeth Whitening</div>
            <div className="services_card_h2">
              Cosmetic treatment to enhance the whiteness of teeth
            </div>
            <img className="services_card_img3" src={serviceImage5} alt="" />
            <button className="service_btn">
              <div className="service_button_contetnt">Read More</div>
            </button>
          </div>
        </div>

        <div className="services_cards">
          <div className="services_card_inner">
            <div className="services_card_h1">Teeth Whitening</div>
            <div className="services_card_h2">
              Cosmetic treatment to enhance the whiteness of teeth
            </div>
            <img className="services_card_img4" src={serviceImage6} alt="" />
            <button className="service_btn">
              <div className="service_button_contetnt">Read More</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
