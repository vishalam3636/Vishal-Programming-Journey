import "./navcomponent.css";
import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

export default function NavComponent() {
  const navigate = useNavigate();

  return (
    <div className="nav-component">
      <div className="left">
        <h2 onClick={() => navigate("/")}>E-Commerce</h2>
      </div>

      {/* Menu Items When user is Logged in*/}
      <div className="center">
        <h2>Yoo</h2>
      </div>

      <div className="right">
        <ul>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/sign-in"}>Sign In</NavLink>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
