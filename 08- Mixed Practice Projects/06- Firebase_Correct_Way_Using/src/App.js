import "./App.css";
import { useState, useEffect } from "react";

import { useFirebase } from "./context/Firebase";

function App() {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    password: "",
  });

  const firebase = useFirebase();

  function submitFormData() {
    firebase.putData("submittedUser/" + formData.userName, {
      ...formData,
    });
    setFormData({
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      password: "",
    });
  }

  console.log(firebase, ">>>>> firebase");
  console.log(userCred, ">>>>>>>>>userCred");
  console.log(formData, ">>>>formData");
  return (
    <div className="App">
      <h3> CONTEXT API - (Correct Way Of Using Firebase In React APP)</h3>

      {/* Create User By Email and Password */}
      <div>
        <input
          value={userCred.email}
          onChange={(e) => setUserCred({ ...userCred, email: e.target.value })}
          type="email"
          placeholder="Enter Email"
        />
        <input
          value={userCred.password}
          onChange={(e) =>
            setUserCred({ ...userCred, password: e.target.value })
          }
          type="password"
          placeholder="Enter Password"
        />
        <button
          onClick={() =>
            firebase.signUpUserWithEmailAndPassword(
              userCred.email,
              userCred.password
            )
          }
        >
          Sign Up
        </button>
      </div>

      {/* Realtime Database */}
      <div
        style={{
          width: "400px",
          border: "2px solid black",
          padding: "20px",
          margin: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <input
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            value={formData.userName}
            placeholder="Username"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            value={formData.firstName}
            placeholder="First Name"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            value={formData.lastName}
            placeholder="Last Name"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            placeholder="Email"
          />
          <input
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            value={formData.city}
            placeholder="City Name"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
            placeholder="Enter Password"
          />
        </div>
        <div>
          <button onClick={submitFormData}>Submit Data</button>
        </div>
      </div>
    </div>
  );
}

export default App;
