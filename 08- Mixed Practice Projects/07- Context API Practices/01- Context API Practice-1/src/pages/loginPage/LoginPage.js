import "./loginpage.css";
import React, {useState, useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// toastify
import { ToastContainer, toast } from 'react-toastify';

// login context
import { useLogin } from "../../contexts/LoginContext";

export default function LoginPage() {
    const login = useLogin();

    const navigate= useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(()=>{
        let prevPath = location?.state?.from[0]
        console.log(prevPath, ">>prevPath in useEffect of loginPage");

        if(prevPath == "/signup"){
            toast.success("Account created successfully !!");
            location.state.from.pop();

            console.log(location, ">>location after pop");
        }
    }, [])

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
                    toast.success("Succesful login !!");
                    navigate("/profile-page", { state: { from: [currentPath] } });
                    login.setLoginUser(isUserExists);
                } else {
                    toast.error("Incorrect password !!")
                }
            } else{
                toast.error("User not found!!")
            }
        } else{
            toast.warning("All fields are mandatory !")
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

            <ToastContainer />
        </div>
    )
}