import React, {useState, useEffect, useContext} from "react";
import { ToastContainer, toast } from 'react-toastify';

import ChildA from "./ChildA";

import { loginContext } from "../contexts/LoginContext";


export default function ParentOne(){
    // context
    const loginContexts = useContext(loginContext);
    
    // states
    const [loginCred, setLoginCred] = useState({
        username : "",
        password: ""
    })

    // functions
    const handleChange = (e) => {
        setLoginCred({...loginCred, [e.target.name] : e.target.value})
    }

    const formError = (data) => {
        if(Boolean(data.username.trim()) == false){
            return ("Username is required field")
        } else if(Boolean(data.password.trim()) == false){
            return("Password is required field")
        } else {
            return "1"
        }
    }

    const handleLogin = () => {
        let val = formError(loginCred);
        console.log(val);

        if(val == "1"){
            toast.success('Successfully logged in');
            loginContexts.setDisplayChildA(true);
            loginContexts.setUserLoggedIn(loginCred);

            setLoginCred({
                username : "",
                password: ""
            })
        } else {
            toast.warn(val)
        }
        
    }

    const handleLogout = () =>{
        loginContexts.setUserLoggedIn(null)
        toast.success('Successfully logout');
    }

    console.log(loginContexts, ">>>>loginContexts in parentOne");
    return(
        <>
            <div className="test-component">
                <h6>Parent Component</h6>

                <div className="form-container">
                    {
                        !loginContexts.userLoggedIn && (
                            <div className="field-container">
                                <input value={loginCred.username} onChange={handleChange} name="username" placeholder="Username" type="text" />
                                <input value={loginCred.password} onChange={handleChange} name="password" placeholder="Password" type="password" />
                            </div>
                        )
                    }
                    <div className="button-container">
                        {
                            !loginContexts.userLoggedIn ? (
                                <button onClick={handleLogin} name="button">Login</button>
                            ) : (
                                <button onClick={handleLogout} name="button">Logout</button>
                            )
                        }
                        
                    </div>
                </div>

                <div className="note">
                    <h5>Note:</h5>
                    <p>Here to understand props and props drilling, I have created a scenario.</p>
                    <div className="note-text">
                        <p>
                            👉 There is a <strong>Parent Component- <em>"ParentOne"</em></strong>. <br></br>
                            👉 There are four <strong>Child Components- <em>"ChildA", "ChildB", "ChildC", "ChildD"</em></strong> <br></br>
                            🖊️ Inside ParentOne is ChildA,
                            🖊️ Inside ChildA is ChildB,
                            🖊️ Inside ChildB is ChildC,
                            🖊️ Inside ChildC is ChildD,
                            👉 The idea is, if the user is logged in, then display the nested child components and then show the logged in username in the last child i.e; <strong><em>"ChildD"</em></strong> <br></br>
                            💡 To achieve that, we have to pass the logged-in user details through each component via <strong><em>"props"</em></strong> then only we'll be able to get the username in in <strong><em>"ChildD"</em></strong>, but we are not uding this approch, instead we are using the concept of <strong><em>ContextAPI</em></strong>
                        </p>

                        <p>
                            👉 For creating ContextAPI,
                            💡 First make a Context Component
                        </p>

                    </div>
                    
                    
                    
                </div>
            </div>


            <div className="display-childs">
                <h6>Child Components</h6>
                    {
                        loginContexts.userLoggedIn && loginContexts.displayChildA && <ChildA />
                    }
            </div>

            <ToastContainer />
        </>
    )
}