import React, {useState, useEffect, useContext} from "react";
import ChildC from "./ChildC";

import { loginContext } from "../contexts/LoginContext";

export default function ChildB(){
    // context
    const loginContexts = useContext(loginContext);

    return(
        <div className="child-component childB">
            <h6>Child-B</h6>
            <p>{"No props is passed in B-component"}</p>

            <ChildC /> 
            
        </div>
    )
}