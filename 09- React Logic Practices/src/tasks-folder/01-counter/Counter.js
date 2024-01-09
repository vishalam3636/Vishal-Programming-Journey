import React, {useState} from "react";
import "./counter.css"

export default function Counter(){
    const [val, setVal] = useState(0);
    const [flag, setFlag] = useState(false);

    const increment = () => {
        setVal(val+1) 
    }

    const decrement = () => {
        setVal(val-1)
    }

    return(
        <div className="main-container counter-container">
            <h3>Task-01 Implement a Counter</h3>
            
            <div className="wrapper-container">
                <div className="display-container">
                    Number : {val}
                </div>
                <div className="button-container">
                    <button onClick={decrement} disabled={val == 0}>Decrement</button>
                    <button onClick={increment}>Increment</button>
                </div>
            </div>
        </div>
        
    )
}