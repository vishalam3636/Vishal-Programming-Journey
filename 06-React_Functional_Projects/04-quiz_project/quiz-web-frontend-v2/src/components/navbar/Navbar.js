import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import React from "react";

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="left">
                <Link to={"/"}>
                    <h1>QUIZ</h1>
                </Link>
            </div>

            <div className="center">
                {/* <h2>Center</h2> */}
                <ul>
                    <NavLink to={"/quiz-details"}>
                        <li>Quiz Details</li>
                    </NavLink>
                </ul>
            </div>

            <div className="right">
                <ul>
                    <NavLink to={"/"}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to={"/add-quiz"}>
                        <li>Quiz Form</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}