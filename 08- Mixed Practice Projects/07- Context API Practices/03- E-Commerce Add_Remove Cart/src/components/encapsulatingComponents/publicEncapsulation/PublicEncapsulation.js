import "./publicencapsulation.css";
import React, { useState, useEffect } from "react";

import { useLogin } from "../../../contexts/itemsContext/LoginContext";
import { useNavigate } from "react-router-dom";

export default function PublicEncapsulation({ children }) {
  const navigate = useNavigate();

  const [checkLogin, setCheckLogin] = useState();

  const loginContextVals = useLogin();

  useEffect(() => {
    setCheckLogin(loginContextVals.logins);
    if (!loginContextVals.logins) {
      navigate("/sign-in");
    } else if (loginContextVals.logins) {
      navigate("/timeline");
    }
  }, []);

  console.log(
    loginContextVals,
    ">>>>>>>>loginContextVals in public encaps comp"
  );
  return (
    <div className="encapsulation-component public-encapsulation">
      {checkLogin ? { children } : ""}
    </div>
  );
}
