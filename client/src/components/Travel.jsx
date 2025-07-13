import React from "react";
import { Link } from "react-router-dom";

const Travel = () => {
  return (
    <div>
      <div className="travels">
        <header class="travel">
          <h1>Travel Tips</h1>
        </header>
        <div class="travel-container">
          <div class="travel-tips-section">
            <div class="travel-tip-card" id="visa">
              <h2>Visa</h2>
              <p>
                Get your tourist visa online or upon arrival. Ensure your
                passport has at least six months of validity.
              </p>
            </div>

            <div class="travel-tip-card" id="clothing">
              <h2>Clothing</h2>
              <p>
                Pack layers for diverse climates. Carry warm jackets for
                trekking and modest attire for temples.
              </p>
            </div>

            <div class="travel-tip-card" id="health">
              <h2>Health</h2>
              <p>
                Bring a basic medical kit and prepare for altitude sickness if
                visiting high-altitude areas.
              </p>
            </div>

            <div class="travel-tip-card" id="guides">
              <h2>Guides</h2>
              <p>
                Hire local guides or porters for a safe and enriching trekking
                experience. Support local communities!
              </p>
            </div>

            <div class="travel-tip-card" id="food">
              <h2>Food</h2>
              <p>
                Try local delicacies like dal bhat and momos. Drink purified
                water to stay healthy.
              </p>
            </div>
          </div>

          <div class="travel-gallery">
            <h2>Explore Nepal</h2>
            <img
              src="./Assets/image/Destinations/imggm.jpg"
              alt="Mountains in Nepal"
            />
            <img
              src="./Assets/image/Destinations/imgn.jpg"
              alt="Nepalese Culture"
            />
            <img
              src="./Assets/image/Destinations/imgt.jpg"
              alt="Temples in Nepal"
            />
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

export default Travel;
