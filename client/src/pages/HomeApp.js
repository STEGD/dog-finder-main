import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './HomeApp.css'
import CardLayout from './QuizComponents/CardLayout'
import SearchIcon from '@material-ui/icons/Search';
import PetsIcon from '@material-ui/icons/Pets';
import GroupIcon from '@material-ui/icons/Group';

export default function HomeApp() {

    const [data_fetch, setData] = useState('')
    


//used the console.log access token
// NEED TO FIX
// data_fetch = fetch("https://api.petfinder.com/v2/animals", {
//     headers: {
//       Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2c25CQ2lmcmJibkVMaWRrUWhOYUJYTVlZS0lHZGd4dUNhdkFwQ0N0Z3VnWmYxYjZCVyIsImp0aSI6ImM0YWVkN2Q1MjNlNTBmOTE4MzY3ZTEyYWFlZDVkNWVlYzI3MGFhOGY2MWE4ZjA1ZjI0ZDRkNTkzNTg4ZWQxYTcwODQzZTJjNGE5YTE5YzZlIiwiaWF0IjoxNjAzNzgxMjgzLCJuYmYiOjE2MDM3ODEyODMsImV4cCI6MTYwMzc4NDg4Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.ISXshC5HMeTLp16mPnInwGWV1dD2kXBFa0CWppxtrtl83ChKckvXUVccFwhzIBlI2TO-1FF00UlfXajOUsN3Ovcg9mZ_Nn01wGWmQt_V2aJNxQEEkHZHmwjkQRc1OzpDOmQiVUi9c_j9RCYRhFTJHHdR-KEwrCbOFdJIDQOxLX69gafz7IC963jmkDnGR27mbWTK5HGSS-5QzczEvpgnQ8KMLEdqLjsPbdJ2sTsVS0Y9_AZLTg2Px7LgmXTNVKOifnS-uwdE8sV7u4PY0PMwAUDFwvKv0YkZDSk6KXxQE48nl41z-gkRQsyIXU1fkjotj0C18OjwfkDAWE-cbERccQ"
//     }
//   }).then(res => res.json()).then(data => console.log(data))


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
                <div className = "inner-about">
                {/*About us section, maybe add 3 sections with icons*/}
                <SearchIcon/>
                <p>Find suitable pets by taking our quiz</p>
                <PetsIcon />
                <p>Explore nearby pets from local shelters</p>
                <GroupIcon/>
                <p>Support the charities!</p>
            </div>
            </div>
            <div className="pet-display">
                {/* Meet, API call to pets*/}
                <div className='card-display'>
                {/* Fix issue when displaying data*/}

                {Object.keys(data_fetch).map(animal => {
                    return <CardLayout key={animal} details={data_fetch[animal]}/>
                })}

                </div>
            </div>

        </div>
    )
}
