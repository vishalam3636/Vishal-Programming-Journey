import React, {useState, useEffect} from "react";
import ChildB from "./ChildB";

export default function ChildA(){
    return(
        <div className="child-component childA">
            <h6>Child-A</h6>
            <p>{"No props is passed in A-component"}</p>

            <ChildB />
        </div>
    )
}