import "./navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="firebaseauthenticationnavigationcontainer">
      <ul>
        <li>
          <NavLink to="/signup">Email-Password Login</NavLink>
        </li>
        <li>
          <NavLink to="/login">Email Password Signup</NavLink>
        </li>
      </ul>
    </div>
  );
}
