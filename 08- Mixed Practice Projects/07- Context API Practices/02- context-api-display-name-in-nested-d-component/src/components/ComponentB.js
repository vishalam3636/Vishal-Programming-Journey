import React from "react";
import ComponentC from "./ComponentC";

export default function ComponentB() {
    return(
        <div className="main-container">
            <h3>ComponentB (B is Inside A)</h3>

            <ComponentC />
        </div>
    )
}