import React from "react";
import { Link, useParams } from "react-router-dom";

const hotelDetails = [
  {
    id: "everest",
    name: "Hotel Everest View",
    img: "/Assets/image/hotel/imgh1.jpg",
    description:
      "Hotel Everest View is an iconic property nestled in the Sagarmatha National Park, offering unparalleled views of Mount Everest. This luxurious hotel provides an intimate retreat with elegantly designed rooms and personalized services.",
    amenities: [
      "Panoramic Mountain Views",
      "Helipad for VIP Access",
      "Fine Dining Restaurant",
      "24/7 Concierge Service",
    ],
    location: "Sagarmatha National Park, Khumjung",
  },
  {
    id: "pokhara",
    name: "Pokhara Lakeside Resort",
    img: "/Assets/image/hotel/imghotel2.jpg",
    description:
      "Pokhara Lakeside Resort offers a serene escape surrounded by the natural beauty of Phewa Lake and the majestic Annapurna range. Guests can enjoy activities like boating, hiking, and exploring the vibrant lakeside markets.",
    amenities: [
      "Lakefront Cottages",
      "Infinity Pool",
      "Adventure Sports Access",
      "Traditional Nepali Spa",
    ],
    location: "Lakeside, Pokhara",
  },
  {
    id: "kathmandu",
    name: "Kathmandu Heritage",
    img: "/Assets/image/hotel/imghotel3.jpg",
    description:
      "The Kathmandu Heritage Hotel blends historical charm with modern luxury. Situated near major UNESCO World Heritage Sites, this hotel is perfect for exploring the cultural and historical essence of Kathmandu.",
    amenities: [
      "Rooftop Dining with City Views",
      "Guided Heritage Tours",
      "Authentic Nepali Cuisine",
      "Proximity to Durbar Square and Swayambhunath",
    ],
    location: "Durbar Marg, Kathmandu",
  },
];

const Booking = () => {
  window.scrollTo(0, 0);
  const params = useParams();
  console.log("params: ", params);

  // give me that elemnent in hotelDetails Array such that id of the element
  // is same as id from params.
  const hotel = hotelDetails.find((hotel) => hotel.id === params.id);

  console.log("Hotel", hotel);

  return (
    <div>
      <header className="details-header">
        <div className="container">
          <h1>Hotel Details</h1>
          <p>
            Discover the finest stays in Nepal. Each hotel offers a unique blend
            of comfort and luxury.
          </p>
          <Link to="/Destination" className="back-button">
            Back to Home
          </Link>
        </div>
      </header>

      {hotel ? (
        <main className="details-main">
          <div className="container">
            <section className="hotel-details-card">
              <h2>{hotel.name}</h2>
              <img src={hotel.img} alt={hotel.name} />
              <p>{hotel.description}</p>
              <br />
              <p>
                <strong>Amenities:</strong>
              </p>
              <ul>
                {hotel.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
              <p>
                <strong>Location:</strong> {hotel.location}
              </p>
            </section>
          </div>
        </main>
      ) : (
        <main className="details-main">
          <div className="container">
            <p>Hotel not found. Please select a valid hotel.</p>
          </div>
        </main>
      )}

      <footer>
        <div class="footer-wrapper">
          <div class="footer-section about">
            <h2>Discover Nepal</h2>
            <p>
              The land of stunning Himalayas, vibrant culture, and unforgettable
              adventures. Come and explore the treasures of Nepal.
            </p>
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

export default Booking;
