import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
    DOB: "",
  });

  // Handle registration form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(input));

    // Show success alert and navigate to login page
    Swal.fire({
      title: "Registration Successful!",
      text: "Your account has been created successfully.",
      icon: "success",
      confirmButtonText: "Go to Login",
      confirmButtonColor: "#4CAF50",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div>
      <div className="register-body">
        <div className="register-container">
          <h1>Register</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your password"
              required
            />
            <input
              type="text"
              name="username"
              value={input.username}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your username"
              required
            />
            <input
              type="text"
              name="phone"
              value={input.phone}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your phone number"
              required
            />
            <input
              type="date"
              name="DOB"
              value={input.DOB}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your date of birth"
              required
            />
            <button type="submit" className="btn-login">
              Register
            </button>
          </form>
          <div className="register-for">
            <p>
              <Link to="/login">Already have an account?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
