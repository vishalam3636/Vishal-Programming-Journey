import "./signuppage.css"
import React, {useState} from "react";

import { useNavigate, Link, useLocation } from "react-router-dom";

// toastify
import { ToastContainer, toast } from 'react-toastify';

// login context
import { useLogin } from "../../contexts/LoginContext";

export default function SignupPage() {
    const login = useLogin();

    const navigate = useNavigate();
    let location = useLocation();
    let currentPath = location.pathname;

    const [userDetails, setUserDetails] = useState({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        location: "",
        password: ""
    })

    const handleChange = (e) => {
        setUserDetails({...userDetails, [e.target.name] : e.target.value})
    }

    const handleSubmit = () => {
        if(userDetails.username.trim() && userDetails.firstname.trim() && userDetails.lastname.trim() && userDetails.email.trim() && userDetails.location.trim() && userDetails.password.trim()){
            console.log(userDetails, ">>>> userdetail");

            const isUserExists = login.allUsers.find(val => {
                return val.username == userDetails.username
            });

            const isEmailExists =  login.allUsers.find(val => {
                    return val.email == userDetails.email
            });

            if(!isUserExists && !isEmailExists){
                console.log("entered wronggg");
                login.setAllUsers([...login.allUsers, userDetails])

                setUserDetails({
                    username: "",
                    firstname: "",
                    lastname: "",
                    email: "",
                    location: "",
                    password: ""
                })

                navigate("/login", {state:{from:[currentPath]}});
            } else {
                if(isUserExists){
                    toast.error("Username already taken!")
                }
                if(isEmailExists){
                    toast.error("Email already exists!")
                }
            }
            console.log(isUserExists, ">>>>isUserExists");
            console.log(isEmailExists, ">>>>isEmailExists");

        } else{
            toast.warning("All fields are mandatory to fill !!")
        }
    }

    console.log(login, ">>>>login context in signup page");
    return(
        <div className="signup-page main-container">
            <div className="form-container">
                <h3>Create Account</h3>

                <div className="field-container">
                    <input onChange={handleChange} value={userDetails.username} name="username" required type="text" placeholder="Username" />
                    <input onChange={handleChange} value={userDetails.firstname} name="firstname" required type="text" placeholder="FirstName" />
                    <input onChange={handleChange} value={userDetails.lastname} name="lastname" required type="text" placeholder="LastName" />
                    <input onChange={handleChange} value={userDetails.email} name="email" required  type="email" placeholder="Email" />
                    <input onChange={handleChange} value={userDetails.location} name="location" required type="text" placeholder="Location" />
                    <input onChange={handleChange} value={userDetails.password} name="password" required type="password" placeholder="Password" />
                </div>
                <div className="button-container">
                    <button onClick={handleSubmit}>Signup</button>
                    <small>Already have an account? <Link to="/login">Login</Link></small>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}


/**
 * Creating Account Logic-
 * Username and Email Must Be Unique
 */