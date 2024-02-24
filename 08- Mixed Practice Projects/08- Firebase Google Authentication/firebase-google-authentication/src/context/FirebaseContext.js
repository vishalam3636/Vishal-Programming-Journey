import { createContext, useContext } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const signupWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <FirebaseContext.Provider
      value={{ name: "Vishal", googleAuth: signupWithGoogle }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
