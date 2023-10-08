import "./signin.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn({ handleLogin, users }) {
  const [allUsers, setAllUsers] = useState(users);
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
      alert("Username and Password fields are required");
    } else {
      let userValidation = allUsers.find((user) => {
        return user.username === loginCreds.username;
      });

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
  // console.log(allUsers, ">>>>>>>All users in signin.js");
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
    </div>
  );
}
