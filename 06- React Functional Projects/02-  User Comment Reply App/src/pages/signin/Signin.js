import "./signin.css";
import React, { useState, useEffect } from "react";

export default function Signin({ handleLogin, users }) {
  const [allUsers, setAllUsers] = useState(users);
  const [loginCreds, setLoginCreds] = useState({ username: "", password: "" });

  // functions
  const handleChange = (e) => {
    // let oldCreds = { ...loginCreds };
    let updatedCreds = { ...loginCreds, [e.target.name]: e.target.value };
    setLoginCreds(updatedCreds);
  };

  const handleSignInSubmit = () => {
    let userValidation = allUsers.find((user) => {
      return user.username === loginCreds.username;
    });

    console.log(userValidation, ">>>>user validation");
  };

  // console.log(handleLogin, ">>>>handle login in signin.js");
  // console.log(allUsers, ">>>>>>>All users in signin.js");
  console.log(loginCreds, ">>>>>>>>login creds");
  return (
    <div className="signinpage">
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
          <label>Username:</label>
          <input
            onChange={handleChange}
            name="password"
            value={loginCreds.password}
            placeholder="Password"
          />
        </div>

        <div className="submitcontainer">
          <button onClick={handleSignInSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
