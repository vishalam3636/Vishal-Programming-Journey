import React from "react";

export default function OutputContainer({ val }) {
  return (
    <div className="fieldContainer">
      <label>Output Val: {val}</label>
    </div>
  );
}
