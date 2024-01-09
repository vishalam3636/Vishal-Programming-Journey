import React, {useState, useEffect} from "react";
import ChildC from "./ChildC";

export default function ChildB({userLoggedIn}){
    const [stopProp, setStopProp] = useState(true);

    function stopPassingPropInChildB(){
        setStopProp(!stopProp);
    }

    return(
        <div className="child-component childB">
            <h6>Child-B</h6>
            <p>{JSON.stringify(userLoggedIn)}</p>

            <div className="button-container">
                <button onClick={stopPassingPropInChildB}>
                    {stopProp ? "Stop Props In ChildB" : "Send Props In ChildB"}
                </button>
            </div>
            
            {
                stopProp ? (
                    <ChildC userLoggedIn={userLoggedIn} />
                ) : (
                    <ChildC /> 
                )
            }
            
        </div>
    )
}