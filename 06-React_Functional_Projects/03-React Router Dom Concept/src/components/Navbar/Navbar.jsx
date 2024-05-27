import "./navbar.css"
import React from "react";

import {Link, NavLink} from 'react-router-dom'

// let tabs = [
//     {id: 1, name: "Food-Delivery", path:"/"},
//     {id: 2, name: "Grocery", path:"/grocery"},
//     {id: 3, name: "Meat", path:"/meat"},
//     {id: 4, name: "Vegetables", path:"/vegetable"}
//     ]

export default function Navbar(){
    return(
        <div className="navbar">
            {/* My */}
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
                <li><NavLink to={"/gallery"}>Gallery</NavLink></li>
            </ul>

            {/* MD tabs */}
            {/* <ul>
                {
                    tabs && tabs.map((tab, index) => {
                        return <li><NavLink to={tab.path}>{tab.name}</NavLink></li>
                    })
                }
            </ul> */}
        </div>
    )
}