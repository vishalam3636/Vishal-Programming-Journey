import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

// login context
export const useLogin = () => useContext(LoginContext);

export const LoginDetailProvider = (props) => {
    const [allUsers, setAllUsers] = useState([
        { 
            username: "vishalam36",
            firstName: "Vishal", 
            lastName: "Chauhan", 
            email: "vishalam36@gmail.com", 
            location: "Pune", 
            password: "123456" 
        }]);

    const [loginUser, setLoginUser] = useState(false);

    return (
        <LoginContext.Provider value={{ loginUser, setLoginUser, allUsers, setAllUsers }}>
            {props.children}
        </LoginContext.Provider>
    )
}