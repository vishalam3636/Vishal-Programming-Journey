// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC79QfVQkRTjYSwDdLcZeu58Z6-_XnvM4g",
  authDomain: "fir-project-75d14.firebaseapp.com",
  projectId: "fir-project-75d14",
  storageBucket: "fir-project-75d14.appspot.com",
  messagingSenderId: "493334001379",
  appId: "1:493334001379:web:e875dc1be25b612636f7d6",
  databaseURL: "https://fir-project-75d14-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
