import "./Header.css";
import vector from '../assets/Vector.png'
const Header = () => {
  return (
    <nav>
      <div className="nav_logo">
        57<span>D</span>entcare
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
        <button className="Button"><span className="button_span">Contact Us </span><img src={vector} alt="vector arrow img"></img></button>
      </div>
    </nav>
  );
};

export default Header;
