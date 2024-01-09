import React from "react";
import "./propandpropdrilling.css"

import ParentOne from "./nested-components/ParentOne";


export default function PropAndPropDrilling(){
    return(
        <div className="main-container">
            <h3>Task-11: Props and Prop Drilling</h3>

            <div className="all-test-components">
                <ParentOne />
            </div>
        </div>
    )
}