import "./publicencapsulating.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../../navigation/Navigation";

export default function PublicEncapsulating({ children }) {
  const navigate = useNavigate();
  let [isLoggedin, setIsLoggedin] = useState("");

  useEffect(() => {
    let loggedin = JSON.parse(localStorage.getItem("loggedin"));
    let type = localStorage.getItem("type");

    if (loggedin !== null && type === "user") {
      navigate("/home");
    }

    setIsLoggedin(loggedin);
  });

  return (
    <>
      <Navigation />
      {isLoggedin ? (
        ""
      ) : (
        <div className="publicencapsulatingpage">{children}</div>
      )}
    </>
  );
}
