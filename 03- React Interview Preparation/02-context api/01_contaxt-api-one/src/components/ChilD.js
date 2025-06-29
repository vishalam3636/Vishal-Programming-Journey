import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export default function ChildD() {
  const user = useContext(UserContext);
  const { name, city } = user;

  return (
    <>
      <div
        style={{ border: "2px solid black", margin: "5px", padding: "10px" }}
      >
        <h3>Child D</h3>

        <h5>Name: {name}</h5>
        <h5>Name: {city}</h5>
      </div>
    </>
  );
}
