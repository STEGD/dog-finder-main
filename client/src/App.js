import React from 'react';
import { Route } from 'react-router-dom';
import PetApp from './pages/PetApp';
import quizApp from './pages/quizApp';
import HomeApp from './pages/HomeApp';
import Navbar from './pages/Navbar';
import Footer from './Components/Footer'




export default function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/homeapp" component={HomeApp} />
      <Route exact path="/quizapp" component={quizApp} />
      <Route exact path="/petapp" component={PetApp} />
      <Footer/>
    </div>
  )
}
