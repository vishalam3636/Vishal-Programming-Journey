import React, {useState, useEffect} from "react";
import ChildB from "./ChildB";

export default function ChildA({userLoggedIn}){
    return(
        <div className="child-component childA">
            <h6>Child-A</h6>
            <p>{JSON.stringify(userLoggedIn)}</p>

            <ChildB userLoggedIn={userLoggedIn} />
        </div>
    )
}