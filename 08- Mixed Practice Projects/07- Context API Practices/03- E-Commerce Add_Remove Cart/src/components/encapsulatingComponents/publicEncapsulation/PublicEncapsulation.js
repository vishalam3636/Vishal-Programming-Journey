import "./publicencapsulation.css";
import React from "react";

import { useLogin } from "../../../contexts/itemsContext/LoginContext";

export default function PublicEncapsulation({ children }) {
  const loginContextVals = useLogin();

  console.log(
    loginContextVals,
    ">>>>>>>>loginContextVals in public encaps comp"
  );
  return (
    <div className="encapsulation-component public-encapsulation">
      {/* <h1>Public Encapsulation</h1> */}
      {children}
    </div>
  );
}
