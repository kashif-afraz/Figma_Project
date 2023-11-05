import "./Footer.css";
import EmailImg from "../assets/Email Vector.png";
const Footer = () => {
  const placeholder = "Your Email";

  return (
    <div className="footer_div">
      <div className="footer_logo">
        57<span className="D">D</span>entcare
      </div>
      <div className="container_head">
        <div className="container">
          <div className="headings">Company</div>
          <a href=".." className="content_head">
            Home
          </a>
          <a href=".." className="content">
            Service
          </a>
          <a href=".." className="content">
            About Us
          </a>
          <a href=".." className="content">
            Why Choose Us
          </a>
          <a href=".." className="content">
            Testimonials
          </a>
          <a href=".." className="content">
            Contact Us
          </a>
        </div>

        <div className="container">
          <div className="headings">Pages</div>
          <a href=".." className="content">
            404
          </a>
          <a href=".." className="content">
            Licensing
          </a>
          <a href=".." className="content">
            Instructions
          </a>
          <a href=".." className="content">
            Style Guide
          </a>
          <a href=".." className="content">
            Changelog
          </a>
          <a href=".." className="content">
            More Templates
          </a>
        </div>

        <div className="container">
          <div className="headings">Address</div>
          <span className="content_address">
            123 Dental Avenue City ville, State 12345 United States
          </span>
          <a href=".." className="content" id="map">
            View on Maps
          </a>
          <span className="headings">Inquires</span>
          <span className="content">(123) 456-7890</span>
          <span className="content">info@57dentcare.com</span>
        </div>

        <div className="container" id="last">
          <div className="headings">NewsLetter</div>
          <span className="content">Stay Updated with our Latest News </span>
          <div className="input_field">
            <input className="email" placeholder={placeholder} />
            <img className="img_arrow" type="button" src={EmailImg} />
          </div>
          <span className="headings">Follow Us</span>
          <div className="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16.0001 2.71997C8.66675 2.71997 2.66675 8.70664 2.66675 16.08C2.66675 22.7466 7.54675 28.28 13.9201 29.28V19.9466H10.5334V16.08H13.9201V13.1333C13.9201 9.78664 15.9067 7.94664 18.9601 7.94664C20.4134 7.94664 21.9334 8.19997 21.9334 8.19997V11.4933H20.2534C18.6001 11.4933 18.0801 12.52 18.0801 13.5733V16.08H21.7867L21.1867 19.9466H18.0801V29.28C21.222 28.7838 24.083 27.1807 26.1467 24.7601C28.2103 22.3394 29.3405 19.2608 29.3334 16.08C29.3334 8.70664 23.3334 2.71997 16.0001 2.71997Z"
                fill="#1E1E1E"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
            >
              <path
                d="M27.8933 3.33335C26.8667 3.80002 25.76 4.10669 24.6133 4.25335C25.7867 3.54669 26.6933 2.42669 27.12 1.08002C26.0133 1.74669 24.7867 2.21335 23.4933 2.48002C22.44 1.33335 20.96 0.666687 19.28 0.666687C16.1467 0.666687 13.5867 3.22669 13.5867 6.38669C13.5867 6.84002 13.64 7.28002 13.7333 7.69335C8.98667 7.45335 4.76 5.17335 1.94667 1.72002C1.45333 2.56002 1.17333 3.54669 1.17333 4.58669C1.17333 6.57335 2.17333 8.33335 3.72 9.33335C2.77333 9.33335 1.89333 9.06669 1.12 8.66669V8.70669C1.12 11.48 3.09333 13.8 5.70667 14.32C4.86764 14.5496 3.98679 14.5816 3.13333 14.4134C3.49548 15.55 4.20472 16.5446 5.16136 17.2573C6.11799 17.97 7.27393 18.3649 8.46667 18.3867C6.44484 19.9873 3.93866 20.8524 1.36 20.84C0.906667 20.84 0.453333 20.8134 0 20.76C2.53333 22.3867 5.54667 23.3334 8.77333 23.3334C19.28 23.3334 25.0533 14.6134 25.0533 7.05335C25.0533 6.80002 25.0533 6.56002 25.04 6.30669C26.16 5.50669 27.12 4.49335 27.8933 3.33335Z"
                fill="#1E1E1E"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="20"
              viewBox="0 0 28 20"
              fill="none"
            >
              <path
                d="M11.56 14L18.48 10L11.56 6.00002V14ZM26.9733 3.56002C27.1466 4.18669 27.2666 5.02669 27.3466 6.09335C27.44 7.16002 27.48 8.08002 27.48 8.88002L27.56 10C27.56 12.92 27.3466 15.0667 26.9733 16.44C26.64 17.64 25.8666 18.4134 24.6666 18.7467C24.04 18.92 22.8933 19.04 21.1333 19.12C19.4 19.2134 17.8133 19.2534 16.3466 19.2534L14.2266 19.3334C8.63998 19.3334 5.15998 19.12 3.78664 18.7467C2.58664 18.4134 1.81331 17.64 1.47998 16.44C1.30664 15.8134 1.18664 14.9734 1.10664 13.9067C1.01331 12.84 0.97331 11.92 0.97331 11.12L0.893311 10C0.893311 7.08002 1.10664 4.93335 1.47998 3.56002C1.81331 2.36002 2.58664 1.58669 3.78664 1.25335C4.41331 1.08002 5.55998 0.96002 7.31998 0.88002C9.05331 0.786687 10.64 0.746687 12.1066 0.746687L14.2266 0.666687C19.8133 0.666687 23.2933 0.88002 24.6666 1.25335C25.8666 1.58669 26.64 2.36002 26.9733 3.56002Z"
                fill="#1E1E1E"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M9.94673 26.72C11.2267 27.1067 12.5201 27.3334 13.8934 27.3334C17.4296 27.3334 20.821 25.9286 23.3215 23.4281C25.822 20.9276 27.2267 17.5362 27.2267 14C27.2267 12.2491 26.8819 10.5152 26.2118 8.89757C25.5417 7.2799 24.5596 5.81004 23.3215 4.57193C22.0834 3.33382 20.6135 2.35169 18.9958 1.68163C17.3782 1.01156 15.6444 0.666687 13.8934 0.666687C12.1424 0.666687 10.4086 1.01156 8.79095 1.68163C7.17327 2.35169 5.70342 3.33382 4.4653 4.57193C1.96482 7.07242 0.560059 10.4638 0.560059 14C0.560059 19.6667 4.12006 24.5334 9.14672 26.4534C9.02672 25.4134 8.90672 23.6934 9.14672 22.5067L10.6801 15.92C10.6801 15.92 10.2934 15.1467 10.2934 13.92C10.2934 12.08 11.4401 10.7067 12.7467 10.7067C13.8934 10.7067 14.4267 11.5467 14.4267 12.6267C14.4267 13.7734 13.6667 15.4134 13.2801 16.9867C13.0534 18.2934 13.9734 19.44 15.3067 19.44C17.6801 19.44 19.5201 16.9067 19.5201 13.3334C19.5201 10.1334 17.2267 7.94669 13.9334 7.94669C10.1734 7.94669 7.96006 10.7467 7.96006 13.6934C7.96006 14.84 8.33339 16 8.94673 16.76C9.06673 16.84 9.06673 16.9467 9.02673 17.1467L8.64006 18.6C8.64006 18.8267 8.49339 18.9067 8.26673 18.7467C6.56006 18 5.57339 15.5734 5.57339 13.6134C5.57339 9.40002 8.56006 5.57335 14.3201 5.57335C18.9067 5.57335 22.4801 8.86669 22.4801 13.24C22.4801 17.8267 19.6401 21.5067 15.5734 21.5067C14.2801 21.5067 13.0134 20.8134 12.5601 20L11.6667 23.16C11.3601 24.3067 10.5201 25.84 9.94673 26.76V26.72Z"
                fill="#1E1E1E"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M21.5599 0C22.2671 0 22.9454 0.280951 23.4455 0.781048C23.9456 1.28115 24.2266 1.95942 24.2266 2.66667V21.3333C24.2266 22.0406 23.9456 22.7189 23.4455 23.219C22.9454 23.719 22.2671 24 21.5599 24H2.89323C2.18599 24 1.50771 23.719 1.00761 23.219C0.507514 22.7189 0.226563 22.0406 0.226562 21.3333V2.66667C0.226562 1.95942 0.507514 1.28115 1.00761 0.781048C1.50771 0.280951 2.18599 0 2.89323 0H21.5599ZM20.8932 20.6667V13.6C20.8932 12.4472 20.4353 11.3416 19.6201 10.5264C18.805 9.71128 17.6994 9.25333 16.5466 9.25333C15.4132 9.25333 14.0932 9.94667 13.4532 10.9867V9.50667H9.73323V20.6667H13.4532V14.0933C13.4532 13.0667 14.2799 12.2267 15.3066 12.2267C15.8016 12.2267 16.2764 12.4233 16.6265 12.7734C16.9766 13.1235 17.1732 13.5983 17.1732 14.0933V20.6667H20.8932ZM5.3999 7.41333C5.99398 7.41333 6.56373 7.17733 6.98382 6.75725C7.4039 6.33717 7.6399 5.76742 7.6399 5.17333C7.6399 3.93333 6.6399 2.92 5.3999 2.92C4.80228 2.92 4.22913 3.1574 3.80655 3.57999C3.38397 4.00257 3.14656 4.57571 3.14656 5.17333C3.14656 6.41333 4.1599 7.41333 5.3999 7.41333ZM7.25323 20.6667V9.50667H3.5599V20.6667H7.25323Z"
                fill="#1E1E1E"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M16.8132 3.76C15.9018 2.7195 15.3995 1.38324 15.3999 0H11.2799V16.5333C11.2481 17.428 10.8704 18.2755 10.2262 18.8973C9.58211 19.519 8.72183 19.8665 7.82656 19.8667C5.93323 19.8667 4.3599 18.32 4.3599 16.4C4.3599 14.1067 6.57323 12.3867 8.85323 13.0933V8.88C4.25323 8.26667 0.226562 11.84 0.226562 16.4C0.226562 20.84 3.90656 24 7.81323 24C11.9999 24 15.3999 20.6 15.3999 16.4V8.01333C17.0706 9.21313 19.0764 9.85686 21.1332 9.85333V5.73333C21.1332 5.73333 18.6266 5.85333 16.8132 3.76Z"
                fill="#1E1E1E"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
            >
              <path
                d="M7.86663 0.666687H19.0666C23.3333 0.666687 26.8 4.13335 26.8 8.40002V19.6C26.8 21.651 25.9852 23.618 24.5349 25.0683C23.0846 26.5186 21.1176 27.3334 19.0666 27.3334H7.86663C3.59997 27.3334 0.133301 23.8667 0.133301 19.6V8.40002C0.133301 6.34901 0.948061 4.38201 2.39834 2.93173C3.84862 1.48145 5.81563 0.666687 7.86663 0.666687ZM7.59997 3.33335C6.32693 3.33335 5.10603 3.83907 4.20586 4.73924C3.30568 5.63942 2.79997 6.86031 2.79997 8.13335V19.8667C2.79997 22.52 4.94663 24.6667 7.59997 24.6667H19.3333C20.6063 24.6667 21.8272 24.161 22.7274 23.2608C23.6276 22.3606 24.1333 21.1397 24.1333 19.8667V8.13335C24.1333 5.48002 21.9866 3.33335 19.3333 3.33335H7.59997ZM20.4666 5.33335C20.9087 5.33335 21.3326 5.50895 21.6451 5.82151C21.9577 6.13407 22.1333 6.55799 22.1333 7.00002C22.1333 7.44205 21.9577 7.86597 21.6451 8.17853C21.3326 8.49109 20.9087 8.66669 20.4666 8.66669C20.0246 8.66669 19.6007 8.49109 19.2881 8.17853C18.9756 7.86597 18.8 7.44205 18.8 7.00002C18.8 6.55799 18.9756 6.13407 19.2881 5.82151C19.6007 5.50895 20.0246 5.33335 20.4666 5.33335ZM13.4666 7.33335C15.2347 7.33335 16.9304 8.03573 18.1807 9.28598C19.4309 10.5362 20.1333 12.2319 20.1333 14C20.1333 15.7681 19.4309 17.4638 18.1807 18.7141C16.9304 19.9643 15.2347 20.6667 13.4666 20.6667C11.6985 20.6667 10.0028 19.9643 8.75259 18.7141C7.50235 17.4638 6.79997 15.7681 6.79997 14C6.79997 12.2319 7.50235 10.5362 8.75259 9.28598C10.0028 8.03573 11.6985 7.33335 13.4666 7.33335ZM13.4666 10C12.4058 10 11.3884 10.4214 10.6382 11.1716C9.88806 11.9217 9.46663 12.9392 9.46663 14C9.46663 15.0609 9.88806 16.0783 10.6382 16.8284C11.3884 17.5786 12.4058 18 13.4666 18C14.5275 18 15.5449 17.5786 16.2951 16.8284C17.0452 16.0783 17.4666 15.0609 17.4666 14C17.4666 12.9392 17.0452 11.9217 16.2951 11.1716C15.5449 10.4214 14.5275 10 13.4666 10Z"
                fill="#1E1E1E"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
