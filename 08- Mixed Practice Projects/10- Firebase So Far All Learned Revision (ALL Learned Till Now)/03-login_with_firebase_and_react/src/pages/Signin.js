import React, { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { app } from "../firebase";
const auth = getAuth();

export default function Signin() {
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const signin = () => {
    signInWithEmailAndPassword(auth, loginCred.email, loginCred.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, ">>logged in user detail");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, ">>> error code for login");
        console.log(errorMessage, ">>> error message for login");
      });
  };

  console.log(loginCred, ">>>>loginCred");
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "max-content",
        margin: "auto",
      }}
    >
      <h1>SIGN-IN FORM</h1>
      <input
        placeholder="Enter Email"
        onChange={(e) => setLoginCred({ ...loginCred, email: e.target.value })}
        type="text"
      />
      <input
        placeholder="Enter Password"
        onChange={(e) =>
          setLoginCred({ ...loginCred, password: e.target.value })
        }
        type="password"
      />
      <button onClick={signin}>Sign In</button>
    </div>
  );
}
