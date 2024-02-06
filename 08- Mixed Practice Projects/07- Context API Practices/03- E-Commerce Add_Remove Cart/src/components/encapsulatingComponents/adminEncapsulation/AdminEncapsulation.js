import "./adminencapsulation.css";
import React from "react";

export default function AdminEncapsulation({ children }) {
  return (
    <div className="encapsulation-component admin-encapsulation">
      {/* <h1>Admin Encapsulation</h1> */}
      {children}
    </div>
  );
}
