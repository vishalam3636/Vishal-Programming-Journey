import "./signuppage.css"
import React, {useState} from "react";

import { useNavigate, Link } from "react-router-dom";

// login context
import { useLogin } from "../../contexts/LoginContext";

export default function SignupPage() {
    const login = useLogin();

    const navigate = useNavigate();

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
                if(val.username.toLowerCase() == userDetails.username.toLowerCase()){
                    alert("Username already exists");
                } else if(val.email.toLowerCase() == userDetails.email.toLowerCase()){
                    alert("Email already exists");
                } else {
                    login.setAllUsers([...login.allUsers, userDetails])

                    setUserDetails({
                        username: "",
                        firstname: "",
                        lastname: "",
                        email: "",
                        location: "",
                        password: ""
                    })

                    login.setLoginUser(true);
                    navigate("/login")
                    alert("Account created successfully !!  ")
                }
            });

            if(isUserExists)
            console.log(isUserExists, ">>>>isUserExists");

        } else{
            alert("All fields are mandatory")
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
        </div>
    )
}


/**
 * Creating Account Logic-
 * Username and Email Must Be Unique
 */