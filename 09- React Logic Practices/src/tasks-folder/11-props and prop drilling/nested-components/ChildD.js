import React, {useState, useEffect} from "react";

export default function ChildD({userLoggedIn}){
    return(
        <div className="child-component childD">
            <h6>Child-D</h6>
            <p>{JSON.stringify(userLoggedIn)}</p>

            {
                userLoggedIn && <h1>{userLoggedIn?.username}</h1>
            }
        </div>
    )
}