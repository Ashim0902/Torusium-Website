import React from "react";
import { Link } from "react-router-dom";

const BusRouteApp = () => {
  window.scrollTo(0, 0);
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "0",
    lineHeight: "1.6",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    color: "#333",
  };

  const headerStyle = {
    color: "#444",
    padding: "1em 0",
  };

  const mainStyle = {
    padding: "20px",
  };

  const sectionStyle = {
    marginBottom: "20px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#f4f4f4",
  };

  const mapStyle = {
    height: "400px",
    width: "100%",
    backgroundColor: "#ccc",
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>City Bus Route and Schedule</h1>
      </header>
      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h2>Bus Route Schedule</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Bus Stop</th>
                <th style={thStyle}>Arrival Time</th>
                <th style={thStyle}>Departure Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={thTdStyle}>Janakpur Bus Park</td>
                <td style={thTdStyle}>8:00 AM</td>
                <td style={thTdStyle}>8:10 AM</td>
              </tr>
              <tr>
                <td style={thTdStyle}>Janaki Mandir</td>
                <td style={thTdStyle}>8:20 AM</td>
                <td style={thTdStyle}>8:25 AM</td>
              </tr>
              <tr>
                <td style={thTdStyle}>Ramananda Chowk</td>
                <td style={thTdStyle}>8:30 AM</td>
                <td style={thTdStyle}>8:35 AM</td>
              </tr>
              <tr>
                <td style={thTdStyle}>Janak Chowk</td>
                <td style={thTdStyle}>8:45 AM</td>
                <td style={thTdStyle}>8:50 AM</td>
              </tr>
              <tr>
                <td style={thTdStyle}>B.P. Koirala Institute</td>
                <td style={thTdStyle}>9:00 AM</td>
                <td style={thTdStyle}>9:05 AM</td>
              </tr>
              <tr>
                <td style={thTdStyle}>Shiv Chowk</td>
                <td style={thTdStyle}>9:15 AM</td>
                <td style={thTdStyle}>9:20 AM</td>
              </tr>
              <tr>
                <td style={thTdStyle}>Dhanushadham</td>
                <td style={thTdStyle}>9:45 AM</td>
                <td style={thTdStyle}>9:50 AM</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section style={sectionStyle}>
          <h2>Route Map</h2>
          <div style={{ height: "400px", width: "100%", overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.752271625672!2d85.9228813!3d26.7288291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef349db2f5c8ab%3A0x6e8c72a22b19f946!2sJanaki%20Mandir%2C%20Janakpur!5e0!3m2!1sen!2snp!4v1687654321000!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
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

export default BusRouteApp;
