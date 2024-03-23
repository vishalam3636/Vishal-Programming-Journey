import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { FirebaseProvider } from "./context/Firebase";
import { LoginContextProvider } from "./context/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <LoginContextProvider>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </LoginContextProvider>
  // </React.StrictMode>
);
