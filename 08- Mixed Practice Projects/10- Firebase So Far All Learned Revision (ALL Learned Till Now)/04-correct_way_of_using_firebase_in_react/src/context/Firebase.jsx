import { createContext, useContext } from "react";

// Firebase Utility Function Importing
import { getAuth } from "firebase/auth";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

//============== Initializing Firebase In Our App =================//
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDDmowxWfTz6PFGR5yqtX9sZzhKJzj58o",
  authDomain: "test-project-78f98.firebaseapp.com",
  databaseURL: "https://test-project-78f98-default-rtdb.firebaseio.com",
  projectId: "test-project-78f98",
  storageBucket: "test-project-78f98.appspot.com",
  messagingSenderId: "314890499936",
  appId: "1:314890499936:web:f5a9403666b79d468b5005",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://test-project-78f98-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
//============== INITIALIZATION DONE ================================//
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(firebaseApp);
export const useFireabase = () => useContext(FirebaseContext); // custom react hook to use firebase context

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((result) => {
        console.log(
          result,
          ">>>> result inm then block of cratingUserWithEmailAndPassword"
        );
      })
      .catch((err) => {
        console.log(
          err,
          ">>>> error while creating user with email and password"
        );
        console.log(err.message, ">>> error message");
        console.log(err.code, ">>> error code");
      });
  };

  const putData = (key, data) => {
    set(ref(database, key), data);
  };

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
