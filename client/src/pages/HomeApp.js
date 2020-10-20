import React from 'react'
import { Link } from 'react-router-dom'
import './HomeApp.css'


export default function HomeApp() {

    return (
        <div>
            <div className = 'top-container'>
            <header className = 'landing-info'>
            <div className= 'landing-contents'>
            <h1 className= 'landing-info-text'>Welcome to the pet finder!</h1>
            <Link to= '/quizapp' className='landing-quiz-btn'>Take Quiz</Link>
            </div>
            </header>
            </div>
            <div className="about-section">
                About us
            </div>
            <div className="pet-display">
                Meet, API call to pets
            </div>

        </div>
    )
}
