import "./emailpasswordauthentication.css";
import React, { useState, useEffect } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function EmailPasswordAuthentication() {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    console.log(submitForm, ">>>>>submitForm value");

    if (submitForm) {
      createUserWithEmailAndPassword(auth, userCred.email, userCred.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, ">>>>>user");
          setUserCred({ email: "", password: "" });
          alert("Succccessfully created user");
          setSubmitForm(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, ">>>>>errorCode");
          console.log(errorMessage, ">>>>>errorMessage");
          setUserCred({ email: "", password: "" });
          alert(errorMessage);
        });
    }
  }, [submitForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userCred.email.trim() !== "" && userCred.password.trim() !== "") {
      setSubmitForm(true);
    } else {
      alert("Email and Password are required felds !");
    }
    console.log(">>>>form submitted");
  };

  console.log(userCred, ">>>>>>userCred");
  return (
    <div className="emailpasswordauthenticationcontainer">
      <h3>Email/password Firebase Create User - Firebase Authentication</h3>

      <div className="formContainer">
        <div className="fieldContainer">
          <input
            type="email"
            placeholder="Email"
            value={userCred.email}
            onChange={(e) =>
              setUserCred({ ...userCred, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={userCred.password}
            onChange={(e) =>
              setUserCred({ ...userCred, password: e.target.value })
            }
          />
        </div>
        <div>
          <button
            disabled={!userCred.email && !userCred.password ? "disabled" : ""}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
