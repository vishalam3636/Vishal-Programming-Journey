import "./navbar.css";
import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "../context/Login";
import { useFirebase } from "../context/Firebase";

export default function Navbar() {
  const login = useLogin();
  const firebase = useFirebase();
  const navigate = useNavigate();

  const handleLogout = () => {
    firebase.signOutFunc();
    login.setIsLogin(false);
    login.setUserCred(null);
    navigate("/sign-in");
  };

  console.log(login, ">>>>login in navbar");
  console.log(firebase, ">>>>firebase in navbar");
  return (
    <div className="navbar-component">
      <ul>
        {login.isLogin && (
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        )}

        {!login.isLogin && (
          <li>
            <NavLink to={"/sign-up"}>SignUp</NavLink>
          </li>
        )}

        {!login.isLogin ? (
          <li>
            <NavLink to={"/sign-in"}>Login</NavLink>
          </li>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </ul>
    </div>
  );
}
