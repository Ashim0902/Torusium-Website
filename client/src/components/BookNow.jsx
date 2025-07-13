import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BookNow = () => {
  window.scrollTo(0, 0);

  const handleBooking = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Booking Confirmed!",
      text: "Your booking has been successfully made. We look forward to seeing you!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#4CAF50",
    });
  };

  const handleCancellation = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel your booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
      cancelButtonText: "No, go back",
      confirmButtonColor: "#f44336",
      cancelButtonColor: "#4CAF50",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Cancelled",
          text: "Your booking has been cancelled.",
          icon: "info",
          confirmButtonText: "OK",
          confirmButtonColor: "#4CAF50",
        });
      }
    });
  };

  const formFields = [
    { label: "Name", type: "text", id: "name", placeholder: "Your Name" },
    { label: "Email", type: "email", id: "email", placeholder: "Your Email" },
    { label: "Check-in", type: "date", id: "checkin" },
    { label: "Check-out", type: "date", id: "checkout" },
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/destination", label: "Destination" },
    { path: "/activities", label: "Activities" },
    { path: "/travel", label: "Travel Tips" },
  ];

  return (
    <div>
      <header className="book">
        <div className="book-logo">
          <h1>
            Book <span>Now</span>
          </h1>
        </div>
      </header>
      <main>
        <section className="book-form">
          <form onSubmit={handleBooking}>
            {formFields.map((field, index) => (
              <div className="book-form-group" key={index}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
            <div className="book-button-group">
              <button type="submit" className="book-submit-btn">
                Book
              </button>
              <button
                type="button"
                className="book-cancel-btn"
                onClick={handleCancellation}
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </main>
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
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
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

export default BookNow;
