import "./signin.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// imports for notification
import { ToastContainer, toast } from "react-toastify";
import { signInReusableFunction } from "../../../reusableFunctions/ReusableFunctions";

export default function SignIn({ handleLogin }) {
  const [loginCreds, setLoginCreds] = useState({ username: "", password: "" });

  // for navigation
  const navigate = useNavigate();

  // functions
  const handleChange = (e) => {
    // let oldCreds = { ...loginCreds };
    let updatedCreds = { ...loginCreds, [e.target.name]: e.target.value };
    setLoginCreds(updatedCreds);
  };

  const handleSignInSubmit = () => {
    if (!loginCreds.username.trim() || !loginCreds.password.trim()) {
      toast.error("Username and Password fields are required");
    } else {
      signInReusableFunction();
      if (userValidation) {
        console.log(userValidation, ">>>>user validation");
        localStorage.setItem("user", JSON.stringify(userValidation));
        localStorage.setItem("loggedin", true);
        localStorage.setItem("type", "user");
        handleLogin(userValidation);
        navigate("/home");
      } else {
        alert("No user found...");
        setLoginCreds({ username: "", password: "" });
      }
    }
  };

  // console.log(handleLogin, ">>>>handle login in signin.js");
  console.log(users, ">>>>>>>>>users in props");
  console.log(allUsers, ">>>>>>>All users in signin.js");
  console.log(loginCreds, ">>>>>>>>login creds");
  return (
    <div className="signinpage mainpage">
      <div className="signincontainer">
        <h2>Sign In</h2>

        <div className="fieldcontainer">
          <label>Username:</label>
          <input
            onChange={handleChange}
            name="username"
            value={loginCreds.username}
            placeholder="Username"
          />
        </div>

        <div className="fieldcontainer">
          <label>Password:</label>
          <input
            onChange={handleChange}
            name="password"
            value={loginCreds.password}
            placeholder="Password"
          />
        </div>

        <div className="submitcontainer">
          <button onClick={handleSignInSubmit}>Submit</button>
          <small>
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Signup</span>
          </small>
        </div>
      </div>

      {/* Component For Notiffications */}
      <ToastContainer theme="dark" />
    </div>
  );
}
