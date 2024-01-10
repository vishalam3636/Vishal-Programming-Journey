import "./emailpasswordlogin.css";
import React, { useState, useEffect } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function EmailpasswordLogin() {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    console.log(submitForm, ">>>>submitForm val in useEffect");
    if (submitForm) {
      signInWithEmailAndPassword(auth, userCred.email, userCred.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user, ">>>>>user");
          console.log(user.email, ">>>>>user email");
          alert(JSON.stringify({ email: user.email, uuid: user.uid }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, ">>>>>errorCode");
          console.log(errorMessage, ">>>>>errorMessage");
          alert(errorCode);
        });

      setSubmitForm(false);
    }
  }, [submitForm]);

  const handleSubmit = () => {
    setSubmitForm(true);
  };

  console.log(userCred, ">>>>>>userCred");
  console.log(submitForm, ">>>>updated submit form");
  return (
    <div className="emailpasswordlogincontainer">
      <h3>Email/password Firebase Login - Firebase Authentication</h3>

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
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
