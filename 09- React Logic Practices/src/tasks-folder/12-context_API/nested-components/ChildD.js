import React, {useState, useEffect, useContext} from "react";

import { loginContext } from "../contexts/LoginContext";

export default function ChildD(){
    const loginContexts = useContext(loginContext);

    console.log(loginContexts, ">>>>loginContexts in ChildD");
    return(
        <div className="child-component childD">
            <h6>Child-D</h6>
            <p>{"No props is passed in D-component, and yet able to get the user data"}</p>

            {
                loginContexts.userLoggedIn && <h1>{loginContexts.userLoggedIn?.username}</h1>
            }
        </div>
    )
}