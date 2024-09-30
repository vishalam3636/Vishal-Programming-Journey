import React, { useState } from "react";
import InputField from "../../reusableComponents/InputField";

export default function Task_09() {
  const [val, setVal] = useState("");
  const [printNum, setPrintNum] = useState("");

  function handleCalc(operator) {
    if (operator === "+") {
      setPrintNum(+printNum + +val);
    } else if (operator === "-") {
      setPrintNum(+printNum - +val);
    } else if (operator === "/") {
      setPrintNum(+printNum / +val);
    } else if (operator === "*") {
      setPrintNum(+printNum * +val);
    } else if (operator === "reset") {
      setPrintNum("");
      setVal("");
    } else if (val === "") {
      alert("Pass a number in input field");
    }

    setVal("");
  }

  return (
    <div className="mainPage">
      <h3>Add Subtract Buttons</h3>

      <div className="playArea">
        <div className="fieldContainer">
          <label>Output Val: {printNum}</label>
        </div>
        <div className="fieldContainer">
          <InputField
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder={"Enter Number"}
          />
          <div className="div">
            <div className="buttonContainer">
              <button onClick={() => handleCalc("+")}>+</button>
              <button onClick={() => handleCalc("-")}>-</button>
              <button onClick={() => handleCalc("*")}>x</button>
              <button onClick={() => handleCalc("/")}>÷</button>
            </div>
            <div className="buttonContainer">
              <button onClick={() => handleCalc("reset")}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
