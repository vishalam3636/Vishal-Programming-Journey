import React, {useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// toastify
import { ToastContainer, toast } from 'react-toastify';

// login context
import { useLogin } from "../../contexts/LoginContext";


export default function ProfilePage() {
    const location = useLocation();
    console.log(location.state, "state inside location");

    const login = useLogin();

    const [loggedInUser, setLoggedInUser] = useState(null);


    useEffect(()=>{
        let lastPath = location?.state?.from;

        if(lastPath && lastPath[0] == '/login'){
            toast.success("Successfully Login")
            location.state?.from.pop();
            console.log(location, ">>location after pop");
        }

        setLoggedInUser(login.loginUser)
    }, [])

    console.log(loggedInUser," >>>>loggedInUser in user profile page");
    return(
        <div className="profile-page  main-container">
            <h3>User Profile Page</h3>

            <div className="user-detail">
                <div>Username: {loggedInUser?.username}</div>
                <div>Email: {loggedInUser?.email}</div>
            </div>

            <ToastContainer />
        </div>
    )
}