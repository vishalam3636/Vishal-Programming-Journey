import "./userencapsulation.css";
import React from "react";

export default function UserEncapsulation({ children }) {
  return (
    <div className="encapsulation-component user-encapsulation">
      {/* <h1>User Encapsulation</h1> */}
      {children}
    </div>
  );
}
