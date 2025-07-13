import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Destination from "./components/Destination";
import Activities from "./components/Activities";
import Travel from "./components/Travel";
import Imgs from "./components/Imgs";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Booking from "./components/Booking";
import BookNow from "./components/BookNow";
import BusRouteApp1 from "./components/BusRouteApp1";
import BusRouteApp2 from "./components/BusRouteApp2";
import BusRouteApp3 from "./components/BusRouteApp3";
import BusRouteApp4 from "./components/BusRouteApp4";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (data) => {
    setUser(data);
  };

  const isLoggedIn = Boolean(user?.email);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/login"
          element={<Login user={user} handleLogin={handleLogin} />}
        /> */}
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/register" element={<Register />} />

        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/imgs" element={<Imgs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/busroute1" element={<BusRouteApp1 />} />
        <Route path="/busroute2" element={<BusRouteApp2 />} />
        <Route path="/busroute3" element={<BusRouteApp3 />} />
        <Route path="/busroute4" element={<BusRouteApp4 />} />
        <Route
          path="/booknow"
          element={user?.email ? <BookNow /> : <Navigate to={"/Login"} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
