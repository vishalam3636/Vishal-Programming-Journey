import "./navcomponent.css";
import React, { useState, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { useLogin } from "../../../contexts/itemsContext/LoginContext";

export default function NavComponent() {
  const navigate = useNavigate();

  const [checkLogin, setCheckLogin] = useState(null);

  const loginContextVals = useLogin();

  useEffect(() => {
    setCheckLogin(loginContextVals.logins);
  }, []);

  return (
    <div className="nav-component">
      <div className="left">
        <h2 onClick={() => navigate("/")}>E-Commerce</h2>
      </div>

      {/* Menu Items When user is Logged in*/}
      {checkLogin ? (
        <div className="center">
          <h2>Yoo</h2>
        </div>
      ) : (
        ""
      )}

      <div className="right">
        <ul>
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
                <button>Logout</button>
              )}
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
