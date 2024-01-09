import React, {useState, useEffect} from "react";
import ChildD from "./ChildD";

export default function ChildC(){
    return(
        <div className="child-component childC">
            <h6>Child-C</h6>
            <p>{"No props is passed in C-component"}</p>

            <ChildD />
        </div>
    )
}