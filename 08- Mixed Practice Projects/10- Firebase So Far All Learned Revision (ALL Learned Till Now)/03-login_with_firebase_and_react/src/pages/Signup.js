import React, { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "../firebase";
const auth = getAuth();

export default function Signup() {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });

  const createUser = () => {
    createUserWithEmailAndPassword(auth, userCred.email, userCred.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user, ">>signedup user detail");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, ">>> error code for login");
        console.log(errorMessage, ">>> error message for login");
      });
  };

  console.log(userCred, ">>>> user cred");
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "max-content",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <h1>SIGN-UP FORM</h1>
      <input
        placeholder="Enter Email"
        onChange={(e) => setUserCred({ ...userCred, email: e.target.value })}
        type="text"
      />
      <input
        placeholder="Enter Password"
        onChange={(e) => setUserCred({ ...userCred, password: e.target.value })}
        type="password"
      />
      <button onClick={createUser}>Sign Up</button>
    </div>
  );
}
