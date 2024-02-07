import "./publicencapsulation.css";
import React, { useState, useEffect } from "react";

import { useLogin } from "../../../contexts/loginContext/LoginContext";

import { useNavigate } from "react-router-dom";

import NavComponent from "../../specialComponents/navComponent/NavComponent";

export default function PublicEncapsulation({ children }) {
  const navigate = useNavigate();

  const loginContextVals = useLogin();

  useEffect(() => {
    if (loginContextVals.logins) {
      if (loginContextVals.userType === "admin") {
        navigate("/customer-handling");
      } else if (loginContextVals.userType === "user") {
        navigate("/timeline");
      }
    } else {
      setTimeout(() => {
        navigate("/sign-in");
        loginContextVals.setUserType("public");
      }, 2000);
    }
  }, []);

  console.log(
    loginContextVals,
    ">>>>>>>>loginContextVals in public encaps comp"
  );
  return (
    <>
      <NavComponent />
      <div className="encapsulation-component public-encapsulation">
        {!loginContextVals.logins ? (
          children
        ) : (
          <h1>You dont have access this page</h1>
        )}
      </div>
    </>
  );
}
