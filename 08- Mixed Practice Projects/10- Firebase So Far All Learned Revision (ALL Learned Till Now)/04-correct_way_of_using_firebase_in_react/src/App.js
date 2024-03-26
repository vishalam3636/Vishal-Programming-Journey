import "./App.css";
import { useState, useEffect } from "react";

import { useFireabase } from "./context/Firebase";

function App() {
  const firebase = useFireabase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyPath, setKeyPath] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  useEffect(() => {
    if (email.includes("@")) {
      let splitEmail = email.split("@");
      setKeyPath(splitEmail[0]);
    }
  }, [email]);

  console.log(firebase, ">>>> firebase");
  console.log(email, ">>> email");
  console.log(password, ">>> password");
  console.log(keyPath, ">>>> keypath");
  return (
    <div className="App">
      <h1>App Component</h1>
      <input
        type="text"
        placeholder="Enter Email"
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          firebase.signupUserWithEmailAndPassword(email, password);
          firebase.putData("users/" + keyPath, { email, password });
        }}
      >
        Signup
      </button>
    </div>
  );
}

export default App;
