import "./Header.css";
import vector from "../assets/Vector.png";
import { useState } from "react";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <nav>
      <div className="nav_logo">
        57<span className="D">D</span>entcare
      </div>
      <div className="nav_links">
        <div>
          <a href="..">Home</a>
          <a href="..">Service</a>
          <a href="..">About Us</a>
          <a href="..">Why Choose Us</a>
          <a href="..">Testimonials</a>
        </div>
      </div>
      
      <div className="nav_button">
        <button className="Button">
          <span className="button_span">Contact Us </span>
          <img className="arrow_img" src={vector} alt="vector arrow img"></img>
        </button>
      </div>



      <div className="drop_down_button" onClick={toggleDrawer}>  <strong>☰MENU</strong></div>
          {isDrawerOpen && (
        <div >
          <ul className='drop_down_ul'>
            <li><a href="#">Home</a></li>
            <li><a href="#">services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Why Choose Us</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
          )}

    </nav>
  );
};

export default Header;
