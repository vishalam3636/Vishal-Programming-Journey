import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { FirebaseProvider } from "./context/FirebaseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>
);
