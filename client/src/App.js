import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PetApp from './pages/PetApp';
import quizApp from './pages/quizApp';
import HomeApp from './pages/HomeApp';
import Navbar from './pages/Navbar';
import Footer from './Components/Footer'
import PetLayout from './pages/PetLayout'



export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/homeapp" component={HomeApp} />
      <Route exact path="/quizapp" component={quizApp} />
      <Route exact path="/petapp" component={PetApp} />
      <Route exact path="/petlayout" component={PetLayout}/>
      
      <Route exact path = '/' component={HomeApp}/>

      </Switch>
      <Footer/>
    </div>
  )
}
