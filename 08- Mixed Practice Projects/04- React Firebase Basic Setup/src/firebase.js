// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx21Fg3QojkS6benmUjxWG4_Ni253rtCk",
  authDomain: "fir-project-login-a3498.firebaseapp.com",
  projectId: "fir-project-login-a3498",
  storageBucket: "fir-project-login-a3498.appspot.com",
  messagingSenderId: "612067476154",
  appId: "1:612067476154:web:ed3008e2de933540807883",

  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://fir-project-login-a3498-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
