import NavComponent from "../../specialComponents/navComponent/NavComponent";
import "./adminencapsulation.css";
import React, { useState, useEffect } from "react";

import { useLogin } from "../../../contexts/loginContext/LoginContext";

import { useNavigate } from "react-router-dom";

export default function AdminEncapsulation({ children }) {
  const loginContextVals = useLogin();

  const navigate = useNavigate();

  useEffect(() => {
    if (!loginContextVals.logins) {
      setTimeout(() => {
        navigate("/sign-in");
        loginContextVals.setUserType("public");
      }, 2000);
    } else if (loginContextVals.logins) {
      if (loginContextVals.userType === "admin") {
        navigate("/customer-handling");
      } else if (loginContextVals.userType === "user") {
        navigate("/timeline");
      }
    }
  }, []);

  console.log(loginContextVals, ">>>>loginContextVals in userEncaps comp");

  return (
    <>
      <NavComponent />

      <div className="encapsulation-component admin-encapsulation">
        {/* <h1>Admin Encapsulation</h1> */}
        {loginContextVals.logins ? (
          children
        ) : (
          <h1>You dont have access this page</h1>
        )}
      </div>
    </>
  );
}
