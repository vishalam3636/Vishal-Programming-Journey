import { createContext, useContext } from "react";

// ***************************************************** //
// *********************** FIREBASE STUFF ************** //
// ***************************************************** //
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC79QfVQkRTjYSwDdLcZeu58Z6-_XnvM4g",
  authDomain: "fir-project-75d14.firebaseapp.com",
  databaseURL: "https://fir-project-75d14-default-rtdb.firebaseio.com",
  projectId: "fir-project-75d14",
  storageBucket: "fir-project-75d14.appspot.com",
  messagingSenderId: "493334001379",
  appId: "1:493334001379:web:7b1b8dd6f34cc9c236f7d6",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

// ***************************************************** //
// *********************** FIREBASE STUFF ************** //
// ***************************************************** //

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => {
    set(ref(database, key), data);
  };

  return (
    <FirebaseContext.Provider
      value={{ signUpUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
