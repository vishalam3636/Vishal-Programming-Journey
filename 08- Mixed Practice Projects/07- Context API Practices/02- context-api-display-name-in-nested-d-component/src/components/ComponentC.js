import React from "react";
import ComponentD from "./ComponentD";

export default function ComponentC() {
    return(
        <div className="main-container">
            <h3>ComponentC (C is Inside B)</h3>
            
            <ComponentD />
        </div>
    )
}