import React, { useState, useEffect } from "react";

export default function Task_01() {
  const [val, setVal] = useState("");

  console.log(val, ">>>>>Val");
  return (
    <div className="mainPage">
      <h3>Change Text As Chane in Input</h3>
      <div className="playArea">
        <div className="fieldContainer">
          <label>Input Field</label>
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <div className="fieldContainer">
          <label>
            Output Val: <h4>{val}</h4>
          </label>
        </div>
      </div>
    </div>
  );
}
