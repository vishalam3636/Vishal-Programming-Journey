import "./loginpage.css";
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

// login context
import { useLogin } from "../../contexts/LoginContext";

export default function LoginPage() {
    const login = useLogin();

    const navigate= useNavigate();

    const [loginCred, setLoginCred] = useState({
        username: "",
        password: ""
    })

    const handleLoginSubmit = () => {
        if(loginCred.username.trim() && loginCred.password.trim()){
            const isUserExists = login.allUsers.find(user => {
                if(user.username == loginCred.username.toLowerCase()){
                    return user;
                }
            })

            if(isUserExists) {
                if(isUserExists.password == loginCred.password.trim()){
                    alert("Succesful login !!");
                    navigate("/profile-page");
                    login.setLoginUser(isUserExists);
                } else {
                    alert("Incorrect password !!")
                }
            } else{
                alert("User not found!!")
            }
        } else{
            alert("All fields are mandatory !")
        }
    }

    console.log(login, ">>>> login context in login page");
    return(
        <div className="login-page main-container">
            <div className="form-container">
                <h3>Login</h3>

                <div className="field-container">
                    <input onChange={(e)=>setLoginCred({...loginCred, username: e.target.value})} value={loginCred.username} type="text" placeholder="Username" />
                    <input onChange={(e)=>setLoginCred({...loginCred, password: e.target.value})} value={loginCred.password} type="password" placeholder="Password" />
                </div>
                <div className="button-container">
                    <button onClick={handleLoginSubmit}>Login</button>
                    <small>Don't have an account? <Link to="/signup">Create Account</Link></small>
                </div>

            </div>
        </div>
    )
}