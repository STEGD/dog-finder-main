import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './HomeApp.css'
import CardLayout from './QuizComponents/CardLayout'

export default function HomeApp() {

    const [data_fetch, setData] = useState('')
    
    const CLIENT_API = "6snBCifrbbnELidkQhNaBXMYYKIGdgxuCavApCCtgugZf1b6BW"
    // new reset secret key
    const KEY = "IMGegdf8JdQG9bY23bnClDvnUrPKDDaedDCFJuZN"
    //get access token
    //curl -d "grant_type=client_credentials&client_id=6snBCifrbbnELidkQhNaBXMYYKIGdgxuCavApCCtgugZf1b6BW&
    //client_secret=yQbiFZkzE4JVoy2fOJJ6hhQBkZhrC9ruRTAlIBvb" https://api.petfinder.com/v2/oauth2/token

    //use the url to get the specified information

    //curl -H "Authorization: Bearer {KEY_TOKEN}" https://api.petfinder.com/v2/animals?location=91762

    //acquire access token to use

    // need use effect to update 
    // may need to convert to class
    // may need to move fetch within this
    // run once [] empty arg

    //setData(data) in the end then use the data_fetch for the cards
    // we want the animals JSON not the other info.
    useEffect(() => {
        fetch("https://api.petfinder.com/v2/oauth2/token", {
            body: "grant_type=client_credentials&client_id="+CLIENT_API+"&client_secret="+KEY,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
          })
          .then(res => res.json())
          .then(data => data.access_token)
          .then(access => {
              //have to assign in order to use it
              var token_access = access
              //fetch the data with the access token
              fetch("https://api.petfinder.com/v2/animals", {
              headers: {
                Authorization: "Bearer " + token_access
              },
              method: "GET"
            }).then(res => res.json()).then(data => setData(data.animals))
          })
    }, [])

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
                {/*About us section, maybe add 3 sections with icons*/}
                    <section className = "containerSection-survey">
                        <h3 className = "hidden">Find your pet!</h3>
                        <Link to ="/quizapp" className ="aboutCardLink">
                            <section className = "description-container">
                                <h4 className = "link-title">
                                        Find your pet!
                                </h4>
                                <p className = "link-description">     
                                        Click here take our survey!     
                                </p>
                            </section>
                        </Link>
                    </section>
                    <section className = "containerSection-pet">
                        <h3 className = "hidden">Explore nearby pets!</h3>              
                        <a className ="aboutCardLink" href = "#pet-display">
                            <section className = "description-container">
                                <h4 className = "link-title">
                                    Explore nearby pets!
                                </h4>
                                <p className = "link-description">
                                    Click here to find friends near you!
                                </p>
                            </section>
                        </a>
                    </section>
                    <section className = "containerSection-charity">
                        <h3 className = "hidden">Support charities!</h3>
                        <a className ="aboutCardLink" href = "https://bestfriends.org/" target = "_blank" rel="noopener noreferrer">
                            <section className = "description-container">
                                <h4 className = "link-title">Support charities!</h4>
                                <p className = "link-description">Click here to donate!</p>
                            </section>
                        </a>
                    </section>
            </div>
            <div id ="pet-display" className = "pet-display">
                {/* Meet, API call to pets*/}
                <div className="card-display">
                {/* Fix issue when displaying data*/}

                {Object.keys(data_fetch).map(animal => {
                    return <CardLayout key={animal} details={data_fetch[animal]}/>
                })}

                </div>
            </div>

        </div>
    )
}
