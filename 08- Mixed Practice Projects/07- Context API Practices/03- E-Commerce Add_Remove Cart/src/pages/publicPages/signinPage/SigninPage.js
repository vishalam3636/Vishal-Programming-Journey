import "./signinpage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../../../contexts/loginContext/LoginContext";

export default function SignInPage() {
  const [selectedType, setSelectedType] = useState(null);

  const loginContextVals = useLogin();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (selectedType) {
      loginContextVals.setIsLogin(true);
      loginContextVals.setUserType(selectedType);
      navigate("/timeline");
    } else {
      alert("Mandatory to select user type !!");
    }
  };

  const handleCheckClick = (e) => {
    console.log(e.target.value, "check value");
    setSelectedType(e.target.value);
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
        <div>
          {/* <input
            onClick={handleCheckClick}
            type="radio"
            id="public"
            name="user_type"
            value="public"
          />
           <label for="public">Public</label> */}
          <br />
          <input
            onClick={handleCheckClick}
            type="radio"
            id="user"
            name="user_type"
            value="user"
          />
            <label for="user">User</label>
          <br />
          <input
            onClick={handleCheckClick}
            type="radio"
            id="admin"
            name="user_type"
            value="admin"
          />
            <label for="admin">Admin</label>
        </div>
        <div className="button-container">
          <button onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </div>
  );
}
