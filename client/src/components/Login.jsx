import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const user = props.user;
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault(); // Correct method name
    const loggeduser = JSON.parse(localStorage.getItem("user")); // Retrieve stored user

    console.log(loggeduser);

    if (
      loggeduser &&
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      Swal.fire({
        title: "Success!",
        text: "Login successfully!",
        icon: "success",
        confirmButtonText: "OK",
        background: "#fefefe",
        confirmButtonColor: "#4CAF50",
      }).then(() => {
        props.setUser(loggeduser);
        // props.handleLogin(loggeduser);
        navigate("/");
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Invalid username or password!",
        icon: "error",
        confirmButtonText: "Try Again",
        background: "#fff3f3",
        confirmButtonColor: "#f44336",
      });
    }
  };

  return (
    <div>
      <form className="login-body" onSubmit={handleLogin}>
        <div className="login-container">
          <h1>Login</h1>
          <div className="login-form">
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              placeholder="Enter your email"
              id="email"
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
              id="password"
              required
            />
            <button type="submit" className="btn-login">
              Log In
            </button>
          </div>
          <div className="login-for">
            <p>
              <a href="#">Forgot Password?</a>
            </p>
          </div>
          <div className="login-app">
            <button>
              <a href="/register">Create new account</a>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
