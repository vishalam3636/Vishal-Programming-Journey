import "./userefhook.css";
import React from "react";

import UseRefHook1 from "./UseRefHook1";

export default function UseRefHook() {
  return (
    <div className="main-container useref-hook-container">
      <h3>Task-14: useRef Hook Basics</h3>

      <div className="componentbox">
        <UseRefHook1 />
      </div>
    </div>
  );
}
