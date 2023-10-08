import "./userencapsulating.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../navigation/Navigation";

export default function UserEncapsulatings({ children }) {
  const navigate = useNavigate();
  let [isLoggedin, setIsLoggedin] = useState("");

  useEffect(() => {
    let loggedin = JSON.parse(localStorage.getItem("loggedin"));
    let type = localStorage.getItem("type");

    setIsLoggedin(loggedin);

    if (!loggedin || type !== "user") {
      navigate("/");
      localStorage.clear();
    }

    console.log("yyoooo in usercaps");
  });

  console.log(isLoggedin, ">>>>islogged in");
  return (
    <>
      <Navigation />
      {isLoggedin ? (
        <div className="userencapsulatingpage">{children}</div>
      ) : (
        ""
      )}
    </>
  );
}
