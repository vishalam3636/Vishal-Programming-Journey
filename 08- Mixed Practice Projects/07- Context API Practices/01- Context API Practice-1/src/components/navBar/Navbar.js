import "./navbar.css"
import React, {useState, useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom"

import {useLogin} from "../../contexts/LoginContext"

export default function Navbar() {
    const login = useLogin()

    const navigate = useNavigate();

    const handleLogout =() => {
        navigate("/login")
        login.setLoginUser(false);
    }

    // console.log(login ,">>>>>>>login context in navbar componenr");
    return(
        <div className="navbar-container">
            <div className="left">
                <h2 onClick={()=> navigate("/")}>CONTXT</h2>
            </div>
            

            <div className="right">
                {
                    login.loginUser && (
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>

                                <li><NavLink to="/about">About</NavLink></li>

                                <li><NavLink to="/profile-page">Profile</NavLink></li>

                                <li><NavLink to="/contact">Contact</NavLink></li>

                            </ul>

                    )
                }

                {
                    login.loginUser ? <button onClick={handleLogout}>Logout</button> : <button onClick={()=> navigate("/login")}>Login</button>
                }
                    
            </div>
        </div>
    )
}