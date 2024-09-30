import React, { useState } from "react";

export default function Task_05() {
  const [val, setVal] = useState("Vishalll Yoooo");
  const [bool, setBool] = useState(true);

  function handleClick() {
    setBool(!bool);
  }
  return (
    <div className="mainPage">
      <h3>Text Change On Button Click</h3>

      <div className="playArea">
        <div className="fieldContainer">
          <label>Output Val: {bool && val}</label>
        </div>
        <div className="buttonContainer">
          <button onClick={handleClick}>Button</button>
        </div>
      </div>
    </div>
  );
}
