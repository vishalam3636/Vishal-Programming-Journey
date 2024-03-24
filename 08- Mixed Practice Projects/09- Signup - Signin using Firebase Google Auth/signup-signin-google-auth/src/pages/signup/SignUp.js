import "./signuppage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFirebase } from "../../context/Firebase";
import Navbar from "../../navbar/Navbar";

export default function SignUp() {
  const navigate = useNavigate();
  const firebase = useFirebase();

  const [newUserCred, setNewUsercred] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setNewUsercred({ ...newUserCred, [e.target.name]: e.target.value });
  };

  const createAccountWithEmailAndPwd = () => {
    if (
      newUserCred.email.trim() ||
      newUserCred.password.trim() ||
      newUserCred.confirmPassword.trim()
    ) {
      if (newUserCred.password === newUserCred.confirmPassword) {
        firebase.signUpWithEmailAndPassword(
          newUserCred.email,
          newUserCred.password
        );
      } else {
        alert("Passwords don't match !!");
      }
    } else {
      alert("Email id and passwords are required parameters !!");
    }
  };

  console.log(firebase, ">>>firebase context");
  console.log(newUserCred, ">>>>> newUserCred");
  return (
    <>
      <Navbar />

      <div className="main-page signup-page">
        <div className="form-container">
          <h3>Create Account</h3>

          <div className="field-container">
            <label>Email Id:</label>
            <input onChange={handleChange} name="email" placeholder="Email" />
          </div>
          <div className="field-container">
            <label>Password: </label>
            <input
              onChange={handleChange}
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="field-container">
            <label>Confirm Password: </label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="button-container">
            <button onClick={createAccountWithEmailAndPwd}>
              Create Account
            </button>
          </div>

          <hr />

          <div className="options-container">
            <img src="/images/yahoo_icon.png" />
            <img src="/images/google_icon.png" />
            <img src="/images/facebook_icon.png" />
            <img src="/images/instagram_icon.png" />
            <img src="/images/github_icon.png" />
          </div>
        </div>
      </div>
    </>
  );
}
