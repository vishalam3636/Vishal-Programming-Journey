import React from "react";
import ComponentB from "../components/ComponentB";


export default function ComponentA () {
    return(
        <div className="main-container">
             <h3>ComponentA (Parent)</h3>

             <ComponentB />
        </div>
    )
}