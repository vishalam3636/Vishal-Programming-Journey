import React, { useContext } from "react";
import ChildD from "./ChilD";
import { UserContext } from "./UserContext";

export default function ChildC() {
  const user = useContext(UserContext);
  const { count, setCount } = user;

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <div
        style={{ border: "2px solid black", margin: "10px", padding: "10px" }}
      >
        <h3>Child C</h3>

        <p>COUNT: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <ChildD />
      </div>
    </>
  );
}
