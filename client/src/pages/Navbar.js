import React from 'react';
import  {Route,Link} from 'react-router-dom'; 
import "../index.css";
import Pic from './pics/logo.png'

export default function Navbar() {
    return (
    <header>
        <div className = "navbar">
                <img src = {Pic} alt = 'title' className = "logo"/>
                <nav>
                    <ul>
                    <li className = "navlist"><Link to="/homeapp">Home</Link></li>
                    <li className = "navlist"><Link to="/quizapp">Survey</Link></li>
                    <li className = "navlist"><Link to="/petapp">Pet App</Link></li>
                    </ul>
                </nav> 
        </div>
    </header>
    )
}
