import React, { useState } from "react";
import InputContainer from "./InputContainer";

export default function Task_03() {
  const [val, setVal] = useState("");

  function getInputVal(val) {
    setVal(val);
  }

  return (
    <div className="mainPage">
      <h3>
        Change Text On Changes Made In Input Field
        <small>(Text and Input Field In Different Component)</small>
        <small>(Output in parent and Input in child)</small>
      </h3>

      <div className="playArea">
        <div className="fieldContainer">
          <label>Output Val: {val}</label>
        </div>
        <InputContainer getInputVal={getInputVal} />
      </div>
    </div>
  );
}
