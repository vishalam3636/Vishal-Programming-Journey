import "./timer.css";
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [loop, setLoop] = useState([]);

  //  useEffect
  useEffect(() => {
    let intervalId;

    if (start) {
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [count, start]);

  // Functions
  function startFunction() {
    setStart(!start);
  }

  function loopFunction() {
    setLoop([...loop, { id: loop.length, val: count }]);
  }

  function resetFunction() {
    setCount(0);
    setLoop([]);
  }

  return (
    <div className="main-container timer-container">
      <h3>Task-04: Timer</h3>
      <div className="count">Count: {count}</div>
      <div className="display-timer-container">{`${
        Math.floor(count / 3600) < 10
          ? 0 + String(Math.floor(count / 3600))
          : Math.floor(count / 3600)
      } : ${
        Math.floor((count % 3600) / 60) < 10
          ? 0 + String(Math.floor((count % 3600) / 60))
          : Math.floor((count % 3600) / 60)
      } : ${count % 60 < 10 ? 0 + String(count % 60) : count % 60}`}</div>

      <div className="button-timer-container">
        <button onClick={startFunction}>{start ? "Stop" : "Start"}</button>
        <button onClick={loopFunction}>Loop</button>
        <button onClick={resetFunction}>Reset</button>
      </div>

      <div className="loop-container">
        <ul>
          {loop.map((obj, ind) => {
            return (
              <li>{`${
                Math.floor(obj.val / 3600) < 10
                  ? 0 + String(Math.floor(obj.val / 3600))
                  : Math.floor(obj.val / 3600)
              } : ${
                Math.floor((obj.val % 3600) / 60) < 10
                  ? 0 + String(Math.floor((obj.val % 3600) / 60))
                  : Math.floor((obj.val % 3600) / 60)
              } : ${
                obj.val % 60 < 10 ? 0 + String(obj.val % 60) : obj.val % 60
              }`}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
