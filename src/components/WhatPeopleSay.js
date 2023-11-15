import React from "react";
import "./WhatPeopleSay.css";
// import Group from "../assets/What_people_say.png";
import man from "../assets/what_people_man.png";
const WhatPeopleSay = () => {
  return (
    <div className="what_container">
      {/* <div className='what_inner_frame'>kassdhi</div> */}
      {/* <img className='what_image' src={Group} alt="" /> */}
      <div className="what_content">
        <div className="what_para1">Testimonials</div>
        <div className="what_para2">What People Say About Us</div>
        <img className="what_people_man_img" src={man} alt="image of a man" />

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <p className="carousel_first">
                "In an emergency situation, I was amazed by how quickly they
                accommodated me. The dentist's skill and compassion were
                evident. I'm grateful for their prompt care."{" "}
              </p>
              <p className="carousel_first_name">David Gahan</p>
              <p className="carousel_second_name">Detroit, Michigan</p>
            </div>
            <div class="carousel-item">
              <p className="carousel_first">
                "In an emergency situation, I was amazed by how quickly they
                accommodated me. The dentist's skill and compassion were
                evident. I'm grateful for their prompt care."{" "}
              </p>
              <p className="carousel_first_name">David Gahan</p>
              <p className="carousel_second_name">Detroit, Michigan</p>
            </div>
            <div class="carousel-item">
              <p className="carousel_first">
                "In an emergency situation, I was amazed by how quickly they
                accommodated me. The dentist's skill and compassion were
                evident. I'm grateful for their prompt care."{" "}
              </p>
              <p className="carousel_first_name">David Gahan</p>
              <p className="carousel_second_name">Detroit, Michigan</p>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
            >
              <g clip-path="url(#clip0_519_3089)">
                <path
                  d="M2.94446 26.5001C2.94446 31.1589 4.32597 35.7132 6.91428 39.5869C9.5026 43.4606 13.1815 46.4797 17.4857 48.2626C21.7899 50.0455 26.5261 50.5119 31.0955 49.603C35.6648 48.6941 39.862 46.4507 43.1563 43.1564C46.4506 39.8621 48.6941 35.6649 49.603 31.0956C50.5119 26.5262 50.0454 21.79 48.2625 17.4858C46.4796 13.1816 43.4605 9.50269 39.5868 6.91437C35.7131 4.32605 31.1589 2.94454 26.5 2.94454C20.2527 2.94454 14.2612 5.42628 9.84372 9.8438C5.4262 14.2613 2.94446 20.2528 2.94446 26.5001ZM47.1111 26.5001C47.1111 30.5766 45.9023 34.5615 43.6375 37.951C41.3727 41.3405 38.1537 43.9823 34.3875 45.5423C30.6214 47.1023 26.4771 47.5105 22.479 46.7152C18.4808 45.9199 14.8083 43.9569 11.9258 41.0744C9.04324 38.1918 7.08022 34.5193 6.28494 30.5211C5.48966 26.523 5.89782 22.3788 7.45783 18.6126C9.01784 14.8464 11.6596 11.6274 15.0491 9.36258C18.4386 7.09781 22.4235 5.88898 26.5 5.88898C31.9664 5.88898 37.2089 8.06051 41.0743 11.9258C44.9396 15.7912 47.1111 21.0337 47.1111 26.5001Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M12.1605 26.3821L23.3641 37.5857C23.4961 37.7399 23.6585 37.865 23.8412 37.9534C24.0238 38.0418 24.2228 38.0914 24.4255 38.0992C24.6283 38.1071 24.8305 38.0729 25.0194 37.9989C25.2083 37.9249 25.3799 37.8126 25.5234 37.6691C25.6668 37.5257 25.7791 37.3541 25.8531 37.1652C25.9271 36.9762 25.9613 36.7741 25.9535 36.5713C25.9456 36.3685 25.896 36.1696 25.8076 35.9869C25.7193 35.8043 25.5941 35.6419 25.44 35.5099L17.9316 27.9721H40.015C40.4054 27.9721 40.7799 27.817 41.056 27.5409C41.3321 27.2648 41.4872 26.8904 41.4872 26.4999C41.4872 26.1094 41.3321 25.735 41.056 25.4589C40.7799 25.1828 40.4054 25.0277 40.015 25.0277H17.6666L25.44 17.2543C25.5941 17.1224 25.7193 16.96 25.8076 16.7773C25.896 16.5947 25.9456 16.3957 25.9535 16.193C25.9613 15.9902 25.9271 15.788 25.8531 15.5991C25.7791 15.4102 25.6668 15.2386 25.5234 15.0951C25.3799 14.9516 25.2083 14.8394 25.0194 14.7654C24.8305 14.6913 24.6283 14.6572 24.4255 14.665C24.2228 14.6728 24.0238 14.7225 23.8412 14.8109C23.6585 14.8992 23.4961 15.0244 23.3641 15.1785L12.1605 26.3821Z"
                  fill="#1E1E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_519_3089">
                  <rect
                    width="53"
                    height="53"
                    fill="white"
                    transform="matrix(0 -1 1 0 0 53)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
            >
              <g clip-path="url(#clip0_519_3093)">
                <path
                  d="M50.0557 26.5001C50.0557 31.1589 48.6742 35.7132 46.0858 39.5869C43.4975 43.4606 39.8186 46.4797 35.5144 48.2626C31.2102 50.0455 26.474 50.5119 21.9046 49.603C17.3353 48.6941 13.1381 46.4507 9.84381 43.1564C6.54951 39.8621 4.30606 35.6649 3.39716 31.0956C2.48827 26.5262 2.95475 21.79 4.73761 17.4858C6.52047 13.1816 9.53965 9.50269 13.4133 6.91437C17.287 4.32605 21.8413 2.94454 26.5001 2.94454C32.7474 2.94454 38.7389 5.42628 43.1564 9.8438C47.5739 14.2613 50.0557 20.2528 50.0557 26.5001ZM5.889 26.5001C5.889 30.5766 7.09782 34.5615 9.36259 37.951C11.6274 41.3405 14.8464 43.9823 18.6126 45.5423C22.3788 47.1023 26.523 47.5105 30.5211 46.7152C34.5193 45.9199 38.1918 43.9569 41.0744 41.0744C43.9569 38.1918 45.9199 34.5193 46.7152 30.5211C47.5105 26.523 47.1023 22.3788 45.5423 18.6126C43.9823 14.8464 41.3405 11.6274 37.951 9.36258C34.5615 7.09781 30.5766 5.88898 26.5001 5.88898C21.0337 5.88898 15.7912 8.06051 11.9259 11.9258C8.06052 15.7912 5.889 21.0337 5.889 26.5001Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M40.8394 26.3821L29.6357 37.5857C29.5038 37.7399 29.3414 37.865 29.1587 37.9534C28.976 38.0418 28.7771 38.0914 28.5744 38.0992C28.3716 38.1071 28.1694 38.0729 27.9805 37.9989C27.7916 37.9249 27.62 37.8126 27.4765 37.6691C27.333 37.5257 27.2208 37.3541 27.1467 37.1652C27.0727 36.9762 27.0386 36.7741 27.0464 36.5713C27.0542 36.3685 27.1039 36.1696 27.1923 35.9869C27.2806 35.8043 27.4058 35.6419 27.5599 35.5099L35.0682 27.9721H12.9849C12.5945 27.9721 12.22 27.817 11.9439 27.5409C11.6678 27.2648 11.5127 26.8904 11.5127 26.4999C11.5127 26.1094 11.6678 25.735 11.9439 25.4589C12.22 25.1828 12.5945 25.0277 12.9849 25.0277H35.3332L27.5599 17.2543C27.4058 17.1224 27.2806 16.96 27.1923 16.7773C27.1039 16.5947 27.0542 16.3957 27.0464 16.193C27.0386 15.9902 27.0727 15.788 27.1467 15.5991C27.2208 15.4102 27.333 15.2386 27.4765 15.0951C27.62 14.9516 27.7916 14.8394 27.9805 14.7654C28.1694 14.6913 28.3716 14.6572 28.5744 14.665C28.7771 14.6728 28.976 14.7225 29.1587 14.8109C29.3414 14.8992 29.5038 15.0244 29.6357 15.1785L40.8394 26.3821Z"
                  fill="#1E1E1E"
                />
              </g>
              <defs>
                <clipPath id="clip0_519_3093">
                  <rect
                    width="53"
                    height="53"
                    fill="white"
                    transform="matrix(0 -1 -1 0 53 53)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
