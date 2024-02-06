import "./signinpage.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../../../contexts/itemsContext/LoginContext";

export default function SignInPage() {
  const loginContextVals = useLogin();

  const navigate = useNavigate();

  const handleLogin = () => {
    loginContextVals.setIsLogin(true);
    navigate("/timeline");
  };
  return (
    <div className="signin-page main-page">
      <div className="form-container">
        <h3>Signin Page</h3>

        <div className="field-container">
          <label for="username">Username: </label>
          <input type="text" placeholder="Username" id="username" />
        </div>
        <div className="field-container">
          <label for="password">Password: </label>
          <input type="text" placeholder="Password" id="password" />
        </div>
        <div className="captcha-container">
          <h1>XXXXXX</h1>
        </div>
        <div className="button-container">
          <button onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
