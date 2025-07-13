import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success"); // 'success' or 'error'
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage("Submitting your details. Please wait...");
    setAlertType("info");
    setShowAlert(true);

    const response = await fetch("http://localhost:3000/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await response.json();
    if (response.status === 400) {
      setError(data);
      setAlertMessage("There was an error submitting your message.");
      setAlertType("error");
    } else if (response.ok) {
      setAlertMessage(
        "Thank you for reaching out! Your message has been submitted."
      );
      setAlertType("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setError(null);
    }

    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <div>
      <div className="contact">
        <h1 className="contacthed">Contact Us</h1>
        {error === null ? (
          ""
        ) : (
          <div style={{ color: "red" }}>{error.message}</div>
        )}
        <div className="forms">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          ></textarea>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </div>

      {/* Styled Alert Modal */}
      {showAlert && (
        <div
          style={{
            position: "fixed",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            maxWidth: "400px",
            background:
              alertType === "success"
                ? "#4caf50"
                : alertType === "error"
                ? "#f44336"
                : "#2196f3",
            color: "white",
            padding: "15px 20px",
            borderRadius: "10px",
            textAlign: "center",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            animation: "slide-down 0.3s ease-in-out",
            zIndex: 1000,
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
            {alertMessage}
          </p>
        </div>
      )}

      <footer>
        <div className="footer-wrapper">
          <div className="footer-section about">
            <h2>Discover Nepal</h2>
            <p>
              The land of stunning Himalayas, vibrant culture, and unforgettable
              adventures. Come and explore the treasures of Nepal.
            </p>
            <img
              src="./Assets/image/imgd.jpg"
              alt="Nepal Tourism Logo"
              className="footer-logo"
            />
          </div>
          <div className="footer-section links">
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
          <div className="footer-section contact">
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
        <div className="footer-bottom">
          <p>
            © 2024 Nepal Tourism Board. All rights reserved. | "Leave nothing
            but footprints, take nothing but memories."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
