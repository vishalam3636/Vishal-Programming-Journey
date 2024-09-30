import React, { useState } from "react";
import OutputContainer from "./OutputContainer";

export default function Task_02() {
  const [val, setVal] = useState("");

  return (
    <div className="mainPage">
      <h3>
        Change Text On Changes Made In Input Field
        <small>(Text and Input Field In Different Component)</small>
        <small>(Input in parent and print value in child)</small>
      </h3>

      <div className="playArea">
        <div className="fieldContainer">
          <label>Input Field:</label>
          <input onChange={(e) => setVal(e.target.value)} />
        </div>
        <OutputContainer val={val} />
      </div>
    </div>
  );
}
