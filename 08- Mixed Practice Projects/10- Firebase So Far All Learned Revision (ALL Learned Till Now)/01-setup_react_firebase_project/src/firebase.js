// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDDmowxWfTz6PFGR5yqtX9sZzhKJzj58o",
  authDomain: "test-project-78f98.firebaseapp.com",
  projectId: "test-project-78f98",
  storageBucket: "test-project-78f98.appspot.com",
  messagingSenderId: "314890499936",
  appId: "1:314890499936:web:f5a9403666b79d468b5005",

  databaseURL: "https://test-project-78f98-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
