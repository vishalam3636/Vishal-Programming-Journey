import React, { useState } from "react";

export default function () {
  const [names, setNames] = useState([
    "Manish",
    "Vishal",
    "Rajni",
    "Bandar",
    "RajniGandha",
    "Panda",
    "Betieees",
  ]);
  const [name, setName] = useState("fsf");

  const handleRandomName = () => {
    let randomNum = Math.floor(Math.random() * names.length);

    setName(names[randomNum]);
  };

  return (
    <div className="mainPage">
      <h3>Print Random Names On Button Click</h3>

      <div className="playArea">
        <div className="fieldContainer">
          <label>Outout Val: {name}</label>
        </div>

        <div className="buttonContainer">
          <button onClick={handleRandomName}>Print Random Name</button>
        </div>
      </div>
    </div>
  );
}
