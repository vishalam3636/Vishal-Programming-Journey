import "./navigation.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(null);

  useEffect(() => {
    const loggedin = localStorage.getItem("loggedin");
    setIsLoggedin(JSON.parse(loggedin));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  console.log(isLoggedin, ">>>>>>>isLoggedin in navigation");
  return (
    <div className="navigationpage">
      <div className="logocontainer">
        <h3 onClick={() => (isLoggedin ? navigate("/home") : navigate("/"))}>
          LOGO
        </h3>
      </div>

      <div className="menucontainer">
        {isLoggedin ? (
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/user-profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>

      <div className="buttoncontainer">
        {isLoggedin ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={() => navigate("/signin")}>Sign In</button>
        )}
      </div>
    </div>
  );
}
