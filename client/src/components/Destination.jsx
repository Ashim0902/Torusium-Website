import React from "react";
import { Link } from "react-router-dom";

const Destination = () => {
  window.scrollTo(0, 0);

  const destinations = [
    {
      title: "Tourism in Nepal",
      description:
        "Nepal is a paradise for travelers seeking adventure, cultural experiences, and natural wonders. From the towering peaks of the Himalayas to the serene lakes and rich historical sites, Nepal offers a unique blend of beauty and heritage.",
    },
    {
      title: "Kathmandu Valley",
      image: "./Assets/image/Destinations/img1.jpg",
      attractions: [
        {
          image: "./Assets/image/Destinations/img2.jpg",
          title: "Pashupatinath Temple",
          description:
            "An iconic Hindu temple dedicated to Lord Shiva, located on the banks of the Bagmati River.",
        },
        {
          image: "./Assets/image/Destinations/imgb.jpg",
          title: "Boudhanath Stupa",
          description:
            "One of the largest stupas in the world, a UNESCO World Heritage Site and a center of Tibetan Buddhism.",
        },
        {
          image: "./Assets/image/Destinations/imgs.jpg",
          title: "Swayambhunath Temple",
          description:
            "Known as the Monkey Temple, this ancient religious site offers panoramic views of Kathmandu.",
        },
        {
          image: "./Assets/image/Destinations/imgd.jpg",
          title: "Durbar Squares",
          description:
            "Historic royal palaces and courtyards located in Kathmandu, Patan, and Bhaktapur.",
        },
      ],
    },
    {
      title: "Pokhara",
      image: "./Assets/image/Destinations/imgp.jpg",
      attractions: [
        {
          image: "./Assets/image/Destinations/imgpe.jpg",
          title: "Phewa Lake",
          description:
            "A serene freshwater lake famous for its reflection of the Annapurna mountain range.",
        },
        {
          image: "./Assets/image/Destinations/imgsk.jpg",
          title: "Sarangkot",
          description:
            "A popular vantage point offering breathtaking sunrise views over the Himalayas.",
        },
        {
          image: "./Assets/image/Destinations/imgdv.webp",
          title: "Devi's Fall",
          description:
            "A unique waterfall where the water flows directly into an underground tunnel.",
        },
        {
          image: "./Assets/image/Destinations/imgw.webp",
          title: "World Peace Pagoda",
          description:
            "A striking Buddhist stupa located on a hilltop, promoting peace and tranquility.",
        },
      ],
    },
    {
      title: "Mt Everest",
      image: "./Assets/image/Destinations/imge.jpg",
    },
  ];

  const hotels = [
    {
      name: "Hotel Everest View",
      image: "./Assets/image/hotel/imgh1.jpg",
      description:
        "Experience the breathtaking views of Mount Everest from your balcony. Luxurious rooms and world-class services await you.",
      bookLink: "/booknow",
      detailsLink: "/booking/everest",
    },
    {
      name: "Pokhara Lakeside Resort",
      image: "./Assets/image/hotel/imgh2.webp",
      description:
        "Stay by the serene Phewa Lake with stunning mountain views. Enjoy boating and peaceful evenings at the lakeside.",
      bookLink: "/booknow",
      detailsLink: "/booking/pokhara",
    },
    {
      name: "Kathmandu Heritage Hotel",
      image: "./Assets/image/hotel/imgh3.webp",
      description:
        "Immerse yourself in the rich culture and history of Kathmandu. Located near UNESCO World Heritage Sites.",
      bookLink: "/booknow",
      detailsLink: "/booking/kathmandu",
    },
  ];

  return (
    <div className="destinations">
      <div className="destinations-header">
        <h1>Popular Places to Visit</h1>
      </div>
      <div className="destinations-container">
        {destinations.map((destination, index) => (
          <section className="destinations-section" key={index}>
            <h2>{destination.title}</h2>
            {destination.image && (
              <img
                src={destination.image}
                alt={destination.title}
                className="destinations-image"
              />
            )}
            {destination.description && <p>{destination.description}</p>}
            {destination.link && (
              <Link
                to={destination.link.path}
                className="destinations-learn-more"
              >
                {destination.link.label}
              </Link>
            )}
            {destination.attractions && (
              <div className="destinations-key-attractions">
                {destination.attractions.map((attraction, idx) => (
                  <div className="destinations-attraction" key={idx}>
                    <img src={attraction.image} alt={attraction.title} />
                    <h4>{attraction.title}</h4>
                    <p>{attraction.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
      <header className="hotel-head">
        <h1>Welcome to Nepal Hotels</h1>
        <p>Find your perfect stay in the heart of Nepal.</p>
      </header>
      <main>
        <section className="hotel-list">
          {hotels.map((hotel, index) => (
            <article className="hotel" key={index}>
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
              <h2>{hotel.name}</h2>
              <p>{hotel.description}</p>
              <div className="buttons">
                <Link to={hotel.bookLink}>
                  <button className="book-now">Book Now</button>
                </Link>
                <Link to={hotel.detailsLink} className="details-button">
                  View Details
                </Link>
              </div>
            </article>
          ))}
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
              {["Home", "Destination", "Activities", "Travel Tips"].map(
                (link, index) => (
                  <li key={index}>
                    <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>
              Email:{" "}
              <a href="mailto:nepaltourism@gmail.com">nepaltourism@gmail.com</a>
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

export default Destination;
