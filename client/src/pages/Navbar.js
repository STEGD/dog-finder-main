import React from 'react';
import  {Link} from 'react-router-dom'; 
import "../index.css";
import Pic from './pics/logo.png'

export default function Navbar() {
    return (
    <header>
        <div className = "navbar">
                <img src = {Pic} alt = 'title' className = "logo"/>
                <nav className = 'nav-bar'>
                    <ul>
                    <li className = "navlist"><Link to="/homeapp">Home</Link></li>
                    <li className = "navlist"><Link to="/quizapp">Survey</Link></li>
                    <li className = "navlist"><Link to="/petapp">Pets</Link></li>
                    <li className = "navlist">
                        <a href = "http://cs480-projects.github.io/teams-fall2020/Team%20STEDG/index.html">
                            Contact
                        </a>
                    </li>
                    </ul>
                </nav> 
        </div>
    </header>
    )
}
