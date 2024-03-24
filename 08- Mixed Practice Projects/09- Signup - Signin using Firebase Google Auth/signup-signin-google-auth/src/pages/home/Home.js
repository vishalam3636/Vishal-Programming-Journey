import React from "react";
import "./homepage.css";
import Navbar from "../../navbar/Navbar";

import { useLogin } from "../../context/Login";

export default function Home() {
  const login = useLogin();

  console.log(login, ">>>> login context in home");
  return (
    <>
      <Navbar />
      <div className="main-page home-page">
        <h3>This is Home Page</h3>
      </div>
    </>
  );
}
