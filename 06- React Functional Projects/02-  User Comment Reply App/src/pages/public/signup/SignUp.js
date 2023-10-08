import "./signup.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  // for navigation
  const navigate = useNavigate();

  return (
    <div className="signuppage mainpage">
      <div className="signupcontainer">
        <h2>Create Account</h2>

        <div className="fieldcontainer">
          <label>Email:</label>
          <input placeholder="Email" />
        </div>

        <div className="fieldcontainer">
          <label>Username:</label>
          <input placeholder="Username" />
        </div>

        <div className="fieldcontainer">
          <label>Password:</label>
          <input placeholder="Password" />
        </div>

        <div className="fieldcontainer">
          <label>Confirm Password:</label>
          <input placeholder="Confirm Password" />
        </div>

        <div className="submitcontainer">
          <button>Submit</button>
          <small>
            Don't have an account?{" "}
            <span onClick={() => navigate("/signin")}>SignIn</span>
          </small>
        </div>
      </div>
    </div>
  );
}
