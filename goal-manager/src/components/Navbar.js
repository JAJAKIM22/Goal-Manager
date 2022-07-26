import React from "react";
import { Link } from "react-router-dom";

 export default function Navbar(){
    return(
        <nav class="navbar navbar-dark bg-primary" className="navbar">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">GOALS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/post">POST</Link>
            </li>
        </ul>
        
        </nav>
    )

 }