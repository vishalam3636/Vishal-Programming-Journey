import React, { useState } from "react";
import InputField from "../../reusableComponents/InputField";

export default function Task_06() {
  const [val, setVal] = useState("");
  const [displayVal, setDisplayVal] = useState("");

  return (
    <div className="mainPage">
      <h3>Text Change On Button Click Passed In Input Field</h3>

      <div className="playArea">
        <div className="fieldContainer">
          <label>Input Field:</label>
          <InputField
            onChange={(e) => setVal(e.target.value)}
            value={val}
            placeholder={"Input Field"}
          />

          <div className="buttonContainer">
            <button onClick={() => setDisplayVal(val)}>Button</button>
          </div>
        </div>

        <div className="fieldContainer">
          <label>Output Val: {displayVal ? displayVal : "NULL"}</label>
        </div>
      </div>
    </div>
  );
}
