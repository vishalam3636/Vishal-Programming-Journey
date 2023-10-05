import "./navigation.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigationpage">
      <div className="logocontainer">
        <Link to="/">
          <h3>LOGO</h3>
        </Link>
      </div>

      <div className="menucontainer">
        <h3>MENU</h3>
      </div>

      <div className="buttoncontainer">
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
}
