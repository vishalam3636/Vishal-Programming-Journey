import React, { useState } from "react";
import "./contextapi.css"

import ParentOne from "./nested-components/ParentOne";

import { LoginContext } from "./contexts/LoginContext";

export default function ContextAPI(){
   
    return(
        <LoginContext>
            <div className="main-container">
                <h3>Task-12: Context API</h3>

                <div className="all-test-components">
                    <ParentOne />
                </div>
            </div>
        </LoginContext>
    )
}