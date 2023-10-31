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

  console.log(newUser, ">>> new user");
  return (
    <>
      <div className="signup-page">
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
    </>
  );
}
