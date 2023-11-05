import "./AfterHeader.css";
import vector from '../assets/Vector.png';
import girl1st from "../assets/AfterHeader girl.png";
const AfterHeader = () => {
  return (
    <div className="start">
      <div className="heading_after_header">
        <div className="box">
          Dental Excellence Starts Here: Your Guide to a Brighter, Healthier
          Smile
        </div>
        
        <div className="nav_button_after">
          <button className="Button_inner">
            <span className="button_span">Contact Us </span>
            <img
              className="arrow_img"
              src={vector}
              alt="vector arrow img"
            ></img>
          </button>
        </div>
      </div>
  


{/* <div className="girl_image"> */}

          <img className="img_after_header" src={girl1st} alt="girl image" />
         

          {/* </div> */}

    </div>
  );
};

export default AfterHeader;
