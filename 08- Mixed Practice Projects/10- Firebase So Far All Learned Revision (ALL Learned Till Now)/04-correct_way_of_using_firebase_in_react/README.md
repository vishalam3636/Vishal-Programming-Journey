# Correct Way Of Using Firebase In React

#### We'll use Context API

## Step-1:

=====> Making a firebase context <=====
📜 firebase.jsx 📜

import { createContext } from "react";

const FirebaseContext = createContext();

export const FirebaseProvider = (props) => {
<FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};

## Step-2

=====> Wrapping App in this firebase context <=======
📜 index.js 📜

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { FirebaseProvider } from "./context/Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<FirebaseProvider>
<App />
</FirebaseProvider>
</React.StrictMode>
);

## Step-3

=======> Initializing Firebase in our App <======
import { createContext } from "react";

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
};

const firebaseApp = initializeApp(firebaseConfig);
//============== INITIALIZATION DONE ================================//

const FirebaseContext = createContext();

export const FirebaseProvider = (props) => {
<FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};

## Step-4

===========> Making Firebase Utility Function In Provider And Inject it in Context <===========
-> I have used createUserWithEmailAndPassword and realTime Database

## Step-5

===========> Make a custom react hook to use firebase <============

export const useFireabase = () => useContext(FirebaseContext); // custom react hook to use firebase context
