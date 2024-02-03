import React, { useState, useEffect } from "react";

import { useName } from "../context/NameContext";

export default function ComponentD() {
  let name = useName();

  const [myName, setMyName] = useState(name);

  console.log(
    useName,
    ">>useName, i.e; useContext(NameContext) in ComponentD.js"
  );
  console.log(myName, ">>>>>myName in ComponentD");
  return (
    <div className="main-container">
      <h3>ComponentD (D is Inside C)</h3>

      <h4>Name: {name ? myName?.name : "Undefined"}</h4>
    </div>
  );
}
