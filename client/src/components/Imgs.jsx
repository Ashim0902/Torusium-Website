import React from "react";
import { Link } from "react-router-dom";

const Imgs = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <div className="albums-2">
        <h1 className="albumhed-2">ALBUMS</h1>

        <div className="img-box-2">
          <div className="img-2">
            <img src="./Assets/image/Albums/img1.png" alt="img-1" />
            <img src="./Assets/image/Albums/img2.png" alt="img-2" />
            <img src="./Assets/image/Albums/img3.png" alt="img-3 " />
            <img src="./Assets/image/Albums/img4.png" alt="img-4 " />
            <img src="./Assets/image/Albums/img5.png" alt="img-5 " />
            <img src="./Assets/image/Albums/img6.png" alt="img-6 " />
            <img src="./Assets/image/Albums/img7.png" alt="img-7 " />
            <img src="./Assets/image/Albums/img8.png" alt="img-8 " />
            <img src="./Assets/image/Albums/img9.png" alt="img-9 " />
            <img src="./Assets/image/Albums/img10.png" alt="img-10" />
            <img src="./Assets/image/Albums/img11.png" alt="img-11" />
            <img src="./Assets/image/Albums/img12.png" alt="img-12 " />
            <img src="./Assets/image/Albums/img13.png" alt="img-13 " />
            <img src="./Assets/image/Albums/img14.png" alt="img-14 " />
            <img src="./Assets/image/Albums/img15.png" alt="img-15 " />
          </div>
        </div>
      </div>
      <footer>
        <div class="footer-wrapper">
          <div class="footer-section about">
            <h2>Discover Nepal</h2>
            <p>
              The land of stunning Himalayas, vibrant culture, and unforgettable
              adventures. Come and explore the treasures of Nepal.
            </p>
            <img
              src="./Assets/image/imgd.jpg"
              alt="Nepal Tourism Logo"
              class="footer-logo"
            />
          </div>
          <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destination">Destination</Link>
              </li>
              <li>
                <Link to="/activities">Activities</Link>
              </li>
              <li>
                <Link to="/travel">Travel Tips</Link>
              </li>
            </ul>
          </div>
          <div class="footer-section contact">
            <h3>Contact Us</h3>
            <p>
              Email:
              <a href="mailto:sawgoonghimire@gmail.com">
                nepaltourism@gmail.com
              </a>
            </p>
            <p>Phone: +977-123-456789</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            © 2024 Nepal Tourism Board. All rights reserved. | "Leave nothing
            but footprints, take nothing but memories."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Imgs;
