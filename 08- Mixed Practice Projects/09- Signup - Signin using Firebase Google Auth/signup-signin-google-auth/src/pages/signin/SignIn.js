import "./signinpage.css";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/Login";
import { useFirebase } from "../../context/Firebase";
import Navbar from "../../navbar/Navbar";

export default function SignIn() {
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });

  const login = useLogin();
  const firebase = useFirebase();
  const navigate = useNavigate();

  const handleEmailIdAndPasswordLogin = () => {
    if (!loginCreds.email.trim() || !loginCreds.password.trim()) {
      alert("Email and Passwords are required parameter");
    } else {
      firebase
        .signInWithEmailIdAndPassword(loginCreds.email, loginCreds.password)
        .then((res) => {
          console.log(res, ">>> res");
          console.log("Sign in promise handling");
        });
    }

    // login.setIsLogin(true);
    // login.setUserCred();
    // navigate("/");
  };

  const handleGoogleLogin = () => {
    firebase.signinWithGoogleAuth();
  };

  console.log(firebase, ">>>Firebase in login form");
  console.log(loginCreds, ">>>>>logincreds");
  return (
    <>
      <Navbar />

      <div className="main-page signin-page">
        <div className="form-container">
          <h3>Login</h3>

          <div className="field-container">
            <label>Email Id:</label>
            <input
              onChange={(e) =>
                setLoginCreds({ ...loginCreds, email: e.target.value })
              }
              placeholder="Email"
            />
          </div>
          <div className="field-container">
            <label>Password: </label>
            <input
              onChange={(e) =>
                setLoginCreds({ ...loginCreds, password: e.target.value })
              }
              placeholder="Password"
            />
          </div>

          <div className="button-container">
            <button onClick={handleEmailIdAndPasswordLogin}>Login</button>
          </div>

          <hr />

          <div className="options-container">
            <img src="/images/yahoo_icon.png" />
            <img onClick={handleGoogleLogin} src="/images/google_icon.png" />
            <img src="/images/facebook_icon.png" />
            <img src="/images/instagram_icon.png" />
            <img src="/images/github_icon.png" />
          </div>
        </div>
      </div>
    </>
  );
}
