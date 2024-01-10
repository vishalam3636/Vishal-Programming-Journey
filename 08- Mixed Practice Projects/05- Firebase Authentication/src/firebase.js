// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC79QfVQkRTjYSwDdLcZeu58Z6-_XnvM4g",
  authDomain: "fir-project-75d14.firebaseapp.com",
  databaseURL: "https://fir-project-75d14-default-rtdb.firebaseio.com",
  projectId: "fir-project-75d14",
  storageBucket: "fir-project-75d14.appspot.com",
  messagingSenderId: "493334001379",
  appId: "1:493334001379:web:e875dc1be25b612636f7d6",

  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://fir-project-75d14-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
export const auth = getAuth();
