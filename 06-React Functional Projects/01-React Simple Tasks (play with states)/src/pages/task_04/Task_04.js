import React, { useState } from "react";
import InputField from "../../reusableComponents/InputField";

export default function Task_04() {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className="mainPage">
      <h3>Linking Two Input Fields</h3>

      <div className="playArea">
        <div className="fieldContainer">
          <label>Input Field 1: </label>
          <InputField
            value={val}
            onChange={handleChange}
            placeholder={"Input Field 1"}
          />
        </div>

        <div className="fieldContainer">
          <label>Input Field 2: </label>
          <InputField
            value={val}
            onChange={handleChange}
            placeholder={"Input Field 1"}
          />
        </div>
      </div>
    </div>
  );
}
