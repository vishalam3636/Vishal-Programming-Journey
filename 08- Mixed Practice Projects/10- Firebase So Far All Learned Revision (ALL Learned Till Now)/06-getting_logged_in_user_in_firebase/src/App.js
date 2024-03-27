import "./App.css";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import { app } from "./firebase";
const auth = getAuth();

import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
function App() {
  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;

        console.log(user, ">>>> user");
        console.log(uid, ">>>uid");

        setIsUser(user);
      } else {
        console.log("You are logged out");
      }
    });
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful...");
        setIsUser(null);
      })
      .catch((error) => {
        console.log("Error occoured at signing out");
      });
  };

  // if (!isUser) {
  //   return (
  //     <>
  //       <Signin />
  //       <Signup />
  //     </>
  //   );
  // }
  return (
    <div className="App">
      <h1>App Component</h1>

      {!isUser && (
        <>
          <Signin />
          <Signup />
        </>
      )}

      {isUser && (
        <>
          <h4>Hello {isUser?.email}</h4>
          <button onClick={handleSignout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;
