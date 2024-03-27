import React, { useState, useEffect } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { app } from "../../firebase";
const auth = getAuth();

export default function Signin() {
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginCred({ ...loginCred, [e.target.name]: e.target.value });
  };

  const getLogin = () => {
    signInWithEmailAndPassword(auth, loginCred.email, loginCred.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, ">>>user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "error code while signing in");
        console.log(errorMessage, "error message while signing in");
      });
  };

  console.log(loginCred, ">>>>logincred");
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "max-content",
        margin: "auto",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h1>Signin Page</h1>
      <input name="email" onChange={handleChange} placeholder="Enter Email" />
      <input
        name="password"
        onChange={handleChange}
        placeholder="Enter Password"
      />
      <button onClick={getLogin}>Create Account</button>
    </div>
  );
}
