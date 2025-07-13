import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const isLoggedIn = props.isLoggedIn;
  const navigate = useNavigate();

  const [showReviewBox, setShowReviewBox] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login status
    props.setUser(null);
    navigate("/"); // Redirect to login page
  };

  const handleReviewButtonClick = () => {
    setShowReviewBox((prev) => !prev); // Toggle visibility of review box
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Submit the review logic (could be sent to a backend or stored locally)
    console.log("Review Submitted:", reviewText);
    setReviewText("");
    setShowReviewBox(false);
    setShowAlert(true); // Show the alert when the review is submitted
    setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
  };

  const logoutButtonStyle = {
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
    border: "none",
    color: "white",
    marginLeft: "160px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  };

  const reviewButtonStyle = {
    padding: "12px 25px",
    background: "#3b82f6", // A modern blue color
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "1000", // Ensure it appears above other content
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const reviewBoxStyle = {
    backdropFilter: "blur(5px)", // Apply the background blur effect
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    position: "fixed",
    bottom: "80px", // Positioned above the "Review Me" button
    right: "20px",
    width: "320px", // Set a fixed width for consistency
    zIndex: "999", // Make sure the review box appears above other content
    display: "flex",
    flexDirection: "column",
    gap: "15px", // Add spacing between elements
    fontFamily: "'Roboto', sans-serif",
  };

  const textareaStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    marginBottom: "12px",
    height: "150px",
    fontSize: "14px",
    resize: "none",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly more opaque for contrast
  };

  const buttonStyle = {
    padding: "10px 20px",
    background: "#10b981", // Fresh green for the submit button
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  };

  const closeButtonStyle = {
    padding: "10px 20px",
    background: "#d1d5db", // Soft gray for the close button
    border: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  };

  // Alert Box Style
  const alertStyle = {
    backgroundColor: "#4CAF50", // Green for success
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    position: "fixed",
    bottom: "80px", // Position above the review box
    right: "20px",
    zIndex: "999",
    transition: "opacity 0.3s ease",
  };

  return (
    <div className="main">
      <div className="navbar">
        <Link to={"/"}>
          <div className="logo">
            Tourism <span>Nepal</span>
          </div>
        </Link>
        <ul className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/destination"}>Destinations</Link>
          <Link to={"/activities"}>Activities</Link>
          <Link to={"/travel"}>Travel Tips</Link>
          <Link to={"/contact"}>Contact us</Link>
        </ul>
        {isLoggedIn ? (
          <button style={logoutButtonStyle} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="Nav-Login">Login</button>
            </Link>
            <Link to={"/register"}>
              <button className="Nav-Register">Register</button>
            </Link>
          </>
        )}
      </div>

      <div className="review">
        <button onClick={handleReviewButtonClick} style={reviewButtonStyle}>
          Review Me
        </button>

        {showReviewBox && (
          <div style={reviewBoxStyle}>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here..."
              style={textareaStyle}
            />
            <button onClick={handleReviewSubmit} style={buttonStyle}>
              Submit Review
            </button>
            <button
              onClick={() => setShowReviewBox(false)}
              style={closeButtonStyle}
            >
              Close
            </button>
          </div>
        )}

        {/* Display Alert Box after submitting review */}
        {showAlert && (
          <div style={alertStyle}>Review Submitted Successfully!</div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
