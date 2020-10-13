import React from 'react';
import  {Route,Link} from 'react-router-dom'; 
import PetApp from './PetApp';
import quizApp from './quizApp';
import HomeApp from './HomeApp';

export default function Navbar() {
    return (
        <div>
            <ul>
            <li><Link to="/homeapp">Home</Link></li>
            <li><Link to="/quizapp">Survey</Link></li>
            <li><Link to="/petapp">Pet App</Link></li>
            <Route exact path="/homeapp" component={HomeApp} />
            <Route exact path="/quizapp" component={PetApp} />
            <Route exact path="/petapp" component={quizApp} />
            </ul>
    

        </div>
    )
}
