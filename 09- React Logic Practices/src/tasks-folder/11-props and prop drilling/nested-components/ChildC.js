import React, {useState, useEffect} from "react";
import ChildD from "./ChildD";

export default function ChildC({userLoggedIn}){
    return(
        <div className="child-component childC">
            <h6>Child-C</h6>
            <p>{JSON.stringify(userLoggedIn)}</p>

            <ChildD userLoggedIn={userLoggedIn} />
        </div>
    )
}