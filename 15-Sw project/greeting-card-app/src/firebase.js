// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT.appspot.com",
//   messagingSenderId: "SENDER_ID",
//   appId: "APP_ID",
// };

const firebaseConfig = {
  apiKey: "AIzaSyC-B-gX9Q1t8MELOyvkRjrCfXt3j9Ppv3k",
  authDomain: "sw-yes-card.firebaseapp.com",
  projectId: "sw-yes-card",
  storageBucket: "sw-yes-card.firebasestorage.app",
  messagingSenderId: "1071873054307",
  appId: "1:1071873054307:web:f888927304694ed01c8a56",
  measurementId: "G-M78F99MGEM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };

/**
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-B-gX9Q1t8MELOyvkRjrCfXt3j9Ppv3k",
  authDomain: "sw-yes-card.firebaseapp.com",
  projectId: "sw-yes-card",
  storageBucket: "sw-yes-card.firebasestorage.app",
  messagingSenderId: "1071873054307",
  appId: "1:1071873054307:web:f888927304694ed01c8a56",
  measurementId: "G-M78F99MGEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 */
