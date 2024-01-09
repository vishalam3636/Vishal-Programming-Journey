import React, { useState } from "react";

import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [newUser, setNewUser] = useState({ email: null, password: null });

  const auth = getAuth();

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((value) => {
        console.log(value, ">>>> value");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  //   console.log(newUser, ">>> new user");

  const containerStyle = {
    border: "2px solid black",
    backgroundColor: "grey",
    margin: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
  };
  return (
    <div className="signup-page" style={containerStyle}>
      <h3>SignUp Page</h3>
      <input
        type="text"
        placeholder="Enter your Email"
        onChange={handleChange}
        name="email"
        required
      />
      <input
        type="password"
        placeholder="Enter your Password"
        onChange={handleChange}
        name="password"
        required
      />
      <button onClick={signupUser}>Sign Up</button>
    </div>
  );
}
