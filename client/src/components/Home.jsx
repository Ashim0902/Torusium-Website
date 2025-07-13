import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const AutoRefreshPage = () => {
    useEffect(() => {
      // Check if the page has already reloaded
      if (!sessionStorage.getItem("hasReloaded")) {
        // Set a timeout to reload the page after 5 seconds
        const timer = setTimeout(() => {
          sessionStorage.setItem("hasReloaded", "true"); // Set the flag
          window.location.reload();
        }, 5000);

        // Cleanup the timeout if the component unmounts
        return () => clearTimeout(timer);
      }
    }, []);

    return <div>The page will reload once after 5 seconds...</div>;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="body">
        <h1 className="frthed">EXPLORE NEPAL NOW</h1>

        <div className="hero-section">
          <h1 className="herohed">
            <span>WELCOME TO</span> NEPAL
          </h1>
          <p>Discover Nepal's hidden gems and unforgettable experiences.</p>
          <button>
            <Link to="/destination">Discover Now </Link>
          </button>
        </div>
      </div>

      <div className="albums">
        <h1 className="albumhed">ALBUMS</h1>
        <div className="img-box">
          <div className="img">
            <marquee>
              <img src="./Assets/image/Albums/img1.png" alt="img-1" />
              <img src="./Assets/image/Albums/img2.png" alt="img-2" />
              <img src="./Assets/image/Albums/img3.png" alt="img-3 " />
              <img src="./Assets/image/Albums/img4.png" alt="img-4 " />
              <img src="./Assets/image/Albums/img5.png" alt="img-5 " />
              <img src="./Assets/image/Albums/img6.png" alt="img-6 " />
              <img src="./Assets/image/Albums/img7.png" alt="img-7 " />
              <img src="./Assets/image/Albums/img8.png" alt="img-8 " />
              <img src="./Assets/image/Albums/img9.png" alt="img-9 " />
              <img src="./Assets/image/Albums/img10.png" alt="img-10 " />
              <img src="./Assets/image/Albums/img11.png" alt="img-11 " />
              <img src="./Assets/image/Albums/img12.png" alt="img-12 " />
              <img src="./Assets/image/Albums/img12.png" alt="img-13 " />
              <img src="./Assets/image/Albums/img14.png" alt="img-14 " />
              <img src="./Assets/image/Albums/img15.png" alt="img-15 " />
            </marquee>
            <button>
              <Link to="/imgs">See More </Link>
            </button>
          </div>
        </div>
        <div className="news-section">
          <h1>
            <span>News</span>
            <br /> NEPAL TOURISM
          </h1>

          <p>
            Nepal Tourism showcases the diverse beauty and cultural heritage of
            Nepal, a land of majestic Himalayas, serene landscapes, and rich
            traditions. It offers unique experiences, from trekking adventures
            like Everest Base Camp to exploring UNESCO World Heritage Sites in
            Kathmandu Valley. Nepal is a haven for nature lovers, adventure
            seekers, and those looking to immerse themselves in vibrant
            festivals and timeless spirituality.
          </p>
        </div>
        <div className="news-container">
          <h1 className="heading">Trending News</h1>
          <div className="news-box">
            <img src="./Assets/image/News/img1.webp" alt="News Image" />
            <div className="news-content">
              <h1>Pokhara Introduces Adventure Sports</h1>
              <p>
                Explore new thrilling activities like paragliding, zip-lining,
                and kayaking in Pokhara.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className="news-box">
            <img src="./Assets/image/News/img2.webp" alt="News Image" />
            <div className="news-content">
              <h1>New Trekking Routes in Everest Region</h1>
              <p>
                Discover the hidden gems of the Everest region with the newly
                opened trekking paths.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className="news-box">
            <img src="./Assets/image/News/img3.webp" alt="News Image" />
            <div className="news-content">
              <h1>Kathmandu Hosts Cultural Festival</h1>
              <p>
                Experience the vibrant traditions and cuisines of Nepal in the
                annual cultural fest.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className="news-box">
            <img src="./Assets/image/News/img4.webp" alt="News Image" />
            <div className="news-content">
              <h1>Wildlife Safari Season in Chitwan National Park</h1>
              <p>
                Chitwan National Park welcomes tourists for the best wildlife
                safaris of the year.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>

          <div className="news-box">
            <img src="./Assets/image/News/img5.webp" alt="News Image" />
            <div className="news-content">
              <h1>Lumbini Announces Peace Festival</h1>
              <p>
                Celebrate the spirit of harmony at the upcoming Peace Festival
                in Lumbini.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="place-bus">
        <h1>Where are you??</h1>
        <div className="place-contanier">
          <div className="place-box">
            <img src="./Assets/image/places/kathmundu.jpg" alt="Kathmandu" />
            <h2>Kathmandu</h2>
            <p>
              Kathmandu is the capital and largest city of Nepal, home to over
              1.5 million people. It is also the largest city in the country by
              population.
            </p>
            <Link to={"/busroute1"}>
              <button className="see-busroot">See Bus Root</button>
            </Link>
          </div>

          <div className="place-box">
            <img src="./Assets/image/places/pokhara.jpg" alt="Kathmandu" />
            <h2>Pokhara</h2>
            <p>
              Pokhara is a scenic city in Nepal, famous for its stunning
              mountain views, serene lakes, adventure tourism, and vibrant
              culture, attracting travelers worldwide.
            </p>
            <Link to={"/busroute2"}>
              <button className="see-busroot">See Bus Root</button>
            </Link>
          </div>

          <div className="place-box">
            <img src="./Assets/image/places/Janakpur.jpg" alt="Kathmandu" />
            <h2>Janakpur</h2>
            <p>
              Janakpur is a historic city in Nepal, known for its rich cultural
              heritage, temples, and as the birthplace of the Hindu goddess
              Sita.
            </p>
            <Link to={"/busroute3"}>
              <button className="see-busroot">See Bus Root</button>
            </Link>
          </div>

          <div className="place-box">
            <img src="./Assets/image/places/lumbini.jpg" alt="Kathmandu" />
            <h2>Lumbini</h2>
            <p>
              Lumbini, located in Nepal, is the birthplace of Lord Buddha, a
              UNESCO World Heritage Site, known for its serene monasteries and
              spiritual significance.
            </p>
            <Link to={"/busroute4"}>
              <button className="see-busroot">See Bus Root</button>
            </Link>
          </div>
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

export default Home;
