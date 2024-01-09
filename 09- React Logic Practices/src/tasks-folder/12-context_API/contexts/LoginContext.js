import React, {createContext, useState} from "react";

export const loginContext = createContext(null);

export const LoginContext  = (props) =>{
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [displayChildA, setDisplayChildA] = useState(false);
    
    return(
        <loginContext.Provider value={{userLoggedIn, setUserLoggedIn, displayChildA, setDisplayChildA}}>
            {props.children}
        </loginContext.Provider>
    )
}