import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// importing pages
import ErrorPage from "./pages/error/ErrorPage";
import Welcome from "./pages/public/welcome/Welcome";
import SignIn from "./pages/public/signin/SignIn";
import SignUp from "./pages/public/signup/SignUp";
import Posts from "./pages/users/posts/Posts";
import Profile from "./pages/users/profile/Profile";
import Home from "./pages/users/home/Home";
import Navigation from "./components/navigation/Navigation";

// APIS
import { getUsers } from "./APIS/APIS";

// importing encapsulating components
import PublicEncapsulating from "./components/encapsulatingComponents/public-encapsulating/PublicEncapsulating";
import UserEncapsulating from "./components/encapsulatingComponents/user-encapsulating/UserEncapsulatings";
import About from "./pages/users/about/About";
import Contact from "./pages/users/contact/Contact";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    getUsers().then((res) => {
      let gotUsers = [...res.data];

      let updatedUserStructure = gotUsers.map((user) => {
        return {
          ...user,
          myposts: [],
        };
      });
      console.log(updatedUserStructure, ">>>updated user DS");
      setUsers(updatedUserStructure);
    });
  }, []);

  // handle login
  const handleLogin = (loggedUser) => {
    console.log(
      loggedUser,
      ">>>> logged user in app.js after signi-in success"
    );
    setLoggedInUser(loggedUser);
  };

  console.log(users, ">>>>>>>users");
  return (
    <div className="App">
      {/* <h1>Comment Application</h1> */}
      <BrowserRouter>
        <Routes>
          {/************ public accessable pages **********/}
          <Route
            exact
            path="/"
            element={
              <PublicEncapsulating>
                <Welcome />
              </PublicEncapsulating>
            }
          />
          <Route
            exact
            path="/signin"
            element={
              <PublicEncapsulating>
                <SignIn users={users} handleLogin={handleLogin} />
              </PublicEncapsulating>
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <PublicEncapsulating>
                <SignUp />
              </PublicEncapsulating>
            }
          />

          {/************ User accessable pages **************/}
          <Route
            exact
            path="/home"
            element={
              <UserEncapsulating loggedInUser={loggedInUser}>
                <Home />
              </UserEncapsulating>
            }
          />
          <Route
            exact
            path="/user-profile"
            element={
              <UserEncapsulating>
                <Profile />
              </UserEncapsulating>
            }
          />
          <Route
            exact
            path="/posts"
            element={
              <UserEncapsulating>
                <Posts />
              </UserEncapsulating>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <UserEncapsulating>
                <About />
              </UserEncapsulating>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <UserEncapsulating>
                <Contact />
              </UserEncapsulating>
            }
          />

          {/***************** error page ********************/}
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}
