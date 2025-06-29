import React, { useContext } from "react";
import ChildB from "./ChildB";
import { UserContext } from "./UserContext";

export default function ChildA() {
  const user = useContext(UserContext);
  const { count } = useContext(UserContext);
  return (
    <>
      <h3>Child A</h3>

      <p>COUNT: {count}</p>
      <ChildB />
    </>
  );
}
