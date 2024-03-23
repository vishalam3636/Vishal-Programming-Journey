import { useState, useEffect } from "react";
import { useFirebase } from "./context/Firebase";
import { useLogin } from "./context/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Navbar from "./navbar/Navbar";

function App() {
  const firebase = useFirebase();
  const login = useLogin();

  console.log(firebase, ">>>>> firebase");
  console.log(login, ">>>>> login");

  useEffect(() => {
    firebase.isUserLogin();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
