import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Navigation from "./pages/navigation/Navigation";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Posts from "./pages/posts/Posts";
import ErrorPage from "./pages/error/ErrorPage";
import SignIn from "./pages/signin/Signin";

import axios from "axios";

// components

export default function App() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // handle login
  const handleLogin = (loggedUser) => {
    console.log(loggedUser);
  };

  console.log(users, ">>>>>>>users");
  return (
    <div className="App">
      {/* <h1>Comment Application</h1> */}
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* public accessable pages */}
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/signin"
            element={<SignIn users={users} handleLogin={handleLogin} />}
          />

          {/* User accessable pages */}
          <Route exact path="/user-profile" element={<Profile />} />
          <Route exact path="/posts" element={<Posts />} />

          {/* error page */}
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
