// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbALl3Qd25jmZq6tyYDCV_J-gltSMXGHg",
  authDomain: "react-logic-practice.firebaseapp.com",
  projectId: "react-logic-practice",
  storageBucket: "react-logic-practice.appspot.com",
  messagingSenderId: "607017986410",
  appId: "1:607017986410:web:1c9efe84caea48abf79d13",
  databaseURL: "https://react-logic-practice-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
