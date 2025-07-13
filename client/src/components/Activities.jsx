import React from "react";
import { Link } from "react-router-dom";

const activityData = [
  {
    img: "./Assets/image/Acivities/img1.png",
    title: "Trekking and Hiking",
    description:
      "Explore beautiful trails like Everest Base Camp and Annapurna Circuit.",
  },
  {
    img: "./Assets/image/Acivities/img2.png",
    title: "Paragliding in Pokhara",
    description: "Soar above Pokhara with stunning mountain views.",
  },
  {
    img: "./Assets/image/Acivities/img1.webp",
    title: "Adventure Sports",
    description:
      "Thrilling activities like rafting, paragliding, or zip-lining that push your limits.",
  },
  {
    img: "./Assets/image/Acivities/img2.webp",
    title: "Cultural and Heritage Exploration",
    description:
      "Discover local traditions, historical landmarks, and ancient monuments.",
  },
  {
    img: "./Assets/image/Acivities/img3.webp",
    title: "Helicopter Tours",
    description:
      "Experience breathtaking aerial views of scenic landscapes and iconic landmarks.",
  },
  {
    img: "./Assets/image/Acivities/img4.webp",
    title: "Caving",
    description:
      "Experience breathtaking aerial views of scenic landscapes and iconic landmarks.",
  },
  {
    img: "./Assets/image/Acivities/img5.webp",
    title: "Mountain Biking",
    description:
      "Ride challenging trails through rugged terrains and picturesque surroundings.",
  },
  {
    img: "./Assets/image/Acivities/img6.webp",
    title: "Hot Air Ballooning",
    description:
      "Soar peacefully over stunning landscapes for a panoramic view of the area.",
  },
  {
    img: "./Assets/image/Acivities/img7.webp",
    title: "Village Tourism and Homestays",
    description:
      "Experience authentic culture, serene landscapes, and warm hospitality through village tourism and homestays in Nepal.",
  },
];

const Activities = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <div className="container">
        <h1>Tourism Activities in Nepal</h1>
        <div className="activities">
          {activityData.map((activity, index) => (
            <div className="activity-card" key={index}>
              <img src={activity.img} alt={activity.title} />
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
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

export default Activities;
