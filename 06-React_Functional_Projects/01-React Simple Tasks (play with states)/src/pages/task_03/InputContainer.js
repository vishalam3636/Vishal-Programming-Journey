import React, { useState } from "react";

export default function InputContainer({ getInputVal }) {
  return (
    <div className="fieldContainer">
      <label>Input Field:</label>
      <input onChange={(e) => getInputVal(e.target.value)} />
    </div>
  );
}
