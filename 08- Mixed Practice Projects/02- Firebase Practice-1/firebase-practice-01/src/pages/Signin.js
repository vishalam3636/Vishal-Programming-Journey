import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Signin() {
  const auth = getAuth();

  const [userCred, setUserCred] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    setUserCred({ ...userCred, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(">>>>>>sign in button clicked");

    signInWithEmailAndPassword(auth, userCred.email, userCred.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential, ">>>>>user credential");
        console.log(user, ">>>>user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ">>>>error code");
        console.log(errorMessage, ">>>>>>error message");
      });
  };

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

  console.log(userCred, ">>>>userCred in login");
  return (
    <div className="signin-page" style={containerStyle}>
      <h3>SignIn Page</h3>
      <input
        onChange={handleChange}
        name="email"
        type="text"
        placeholder="Enter Email"
      />
      <input
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="Enter Password"
      />
      <button onClick={handleSubmit}>Sign In</button>
    </div>
  );
}
