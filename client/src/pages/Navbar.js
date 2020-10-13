import React from 'react';
import  {Route,Link} from 'react-router-dom'; 
import "../index.css";

export default function Navbar() {
    return (
        <div className = "navbar">
            <nav>
            <li><Link to="/homeapp">Home</Link></li>
            <li><Link to="/quizapp">Survey</Link></li>
            <li><Link to="/petapp">Pet App</Link></li>
            </nav>
        </div>
    )
}
