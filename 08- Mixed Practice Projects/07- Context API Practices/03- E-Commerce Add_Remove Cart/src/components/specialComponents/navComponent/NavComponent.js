import "./navcomponent.css";
import React, { useState, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { useLogin } from "../../../contexts/loginContext/LoginContext";

export default function NavComponent() {
  const navigate = useNavigate();

  const [checkLogin, setCheckLogin] = useState(null);

  const loginContextVals = useLogin();

  useEffect(() => {
    setCheckLogin(loginContextVals.logins);
  }, []);

  const handleLogout = () => {
    loginContextVals.setIsLogin(false);
    loginContextVals.setUserType("public");
    navigate("/sign-in");
  };

  const handleLogoClick = () => {
    if (loginContextVals.userType === "admin") {
      navigate("/customer-handling");
    } else if (loginContextVals.userType === "user") {
      navigate("/timeline");
    } else {
      navigate("/sign-in");
      loginContextVals.setUserType("public");
      loginContextVals.setIsLogin(false);
    }
  };

  return (
    <div className="nav-component">
      <div className="left">
        <h2 onClick={handleLogoClick}>E-Commerce</h2>
      </div>

      {/* Menu Items When user is Logged in*/}
      {checkLogin ? (
        <div className="center">
          {/* Admin Ul */}
          {loginContextVals.userType == "admin" ? (
            <ul>
              <li>
                <NavLink to={"/admin-profile"}>Admin Profile</NavLink>
              </li>
              <li>
                <NavLink to={"/customer-handling"}>Customers</NavLink>
              </li>
            </ul>
          ) : loginContextVals.userType == "user" ? (
            <ul>
              <li>
                <NavLink to={"/cart"}>Cart</NavLink>
              </li>
              <li>
                <NavLink to={"/user-profile"}>My Profile</NavLink>
              </li>
              <li>
                <NavLink to={"/timeline"}>Timeline</NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      <div className="right">
        <ul>
          {!checkLogin ? (
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
          ) : (
            ""
          )}
          <li>
            {!checkLogin ? (
              <NavLink to={"/sign-in"}>Sign In</NavLink>
            ) : (
              <button onClick={handleLogout}>Logout</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
