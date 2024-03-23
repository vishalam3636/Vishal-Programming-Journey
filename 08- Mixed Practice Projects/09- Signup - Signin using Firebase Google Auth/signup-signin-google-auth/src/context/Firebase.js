import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth"; // for signing out
import { onAuthStateChanged } from "firebase/auth"; // for googleAuth, also check for emailId and Password

// importing login context, so to store login-states
import { useLogin } from "./Login";

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
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  // loginContext
  const login = useLogin();

  // Signin/Signup using google auth
  const signinWithGoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        console.log(credential, ">>credential");
        console.log(token, ">>token");
        console.log(user, ">>user");

        login.setIsLogin(true);
        login.setUserCred(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.log(errorCode, ">>>errorCod");
        console.log(errorMessage, ">>>errorMessage");
        console.log(email, ">>>email");
        console.log(credential, ">>>credentials");
      });
  };

  // create user with email and password
  const signUpWithEmailAndPassword = (email, password) => {
    console.log(
      "account is going to get created with email and password-",
      email,
      password
    );
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user, ">>>user");

        login.setIsLogin(true);
        login.setUserCred(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        console.log(errorCode, ">>>errorCode");
        console.log(errorMessage, ">>>errorMessage");
        alert(errorMessage);
      });
  };

  // signin using email id and password
  const signInWithEmailIdAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        login.setIsLogin(true);
        login.setUserCred(user);
        console.log(user, ">>>> user signed in");

        return "Successs !!!!";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ">>>>>errorCode");
        console.log(errorMessage, ">>>>>>errorMessage");

        return "Faillleddd !!";
      });
  };

  // checking if user is loggedin (is user object is there, means user is loggedIn and if its null, means not logged in)
  const isUserLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user, ">>>>logged in user");
        // alert("user is logged in");
        const uid = user.uid;
        console.log(uid, ">>>>logged in uid");

        login.setIsLogin(true);
        login.setUserCred(user);
      } else {
        console.log("No current user");
        alert("No current user is logged-in, i.e; no firebase auth found");
      }
    });
  };

  const signOutFunc = () => {
    signOut(auth);
  };

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogleAuth,
        signUpWithEmailAndPassword,
        signInWithEmailIdAndPassword,
        isUserLogin,
        signOutFunc,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
