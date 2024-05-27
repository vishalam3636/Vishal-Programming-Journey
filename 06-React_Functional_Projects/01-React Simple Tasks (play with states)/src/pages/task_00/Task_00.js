import "./Task_00.css";
import React, { useState } from "react";

export default function Task_00({ displayProject }) {
  const [display, setDisplay] = useState(false);

  function handleDisplay() {
    setDisplay(!display);
    displayProject(!display);
  }

  return (
    <div className="mainPage">
      <h3>
        Practice Applications
        <h4>(By- Vishal)</h4>
      </h3>
      <div className="header-footer">
        <div>
          <a href="https://www.instagram.com/vishalam36/" target="_blank">
            <img src="./images/instalogo.png" />
          </a>
        </div>
        <div className="buttonContainer">
          <button onClick={handleDisplay}>
            {display ? "Hide Projects" : "Display Projects"}
          </button>
        </div>
        <div>
          <a href="https://www.instagram.com/vishalam36/" target="_blank">
            <img src="./images/instalogo.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
