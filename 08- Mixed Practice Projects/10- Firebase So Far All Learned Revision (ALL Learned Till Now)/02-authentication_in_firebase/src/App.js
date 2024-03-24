import "./App.css";
import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "./firebase";
const auth = getAuth();

function App() {
  const [userCreds, setUserCreds] = useState({
    email: "vishal@gmail.com",
    password: "123456789",
  });
  const createUser = () => {
    createUserWithEmailAndPassword(auth, userCreds.email, userCreds.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user, "created user credentials");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, ">>> error code while creating user");
        console.log(errorMessage, ">>>> error message while creating user");
      });
  };

  console.log(userCreds, ">>>> user creds");
  return (
    <div className="App">
      <h1>Firebase Authentication</h1>
      <h4>Email/Password</h4>

      <div>
        <input
          placeholder="Email"
          onChange={(e) =>
            setUserCreds({ ...userCreds, email: e.target.value })
          }
          type="text"
        />
        <input
          placeholder="Passwprd"
          onChange={(e) =>
            setUserCreds({ ...userCreds, password: e.target.value })
          }
          type="password"
        />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
