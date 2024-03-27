import React, { useState, useEffect } from "react";

export default function Signup() {
  const [sigupDetail, setSignupDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignupDetail({ ...sigupDetail, [e.target.name]: e.target.value });
  };

  const createAccount = () => {};

  console.log(sigupDetail, ">>>> sigupDetail");
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        width: "max-content",
        margin: "auto",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h1>Signup Page</h1>
      <input name="email" onChange={handleChange} placeholder="Enter Email" />
      <input
        name="password"
        onChange={handleChange}
        placeholder="Enter Password"
      />
      <button onClick={createAccount}>Create Account</button>
    </div>
  );
}
