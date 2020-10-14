import React, {useRef, useEffect, useState} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
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
      <Route exact path="/quizapp" component={PetApp} />
      <Route exact path="/petapp" component={quizApp} />
      <Footer/>
    </div>
  )
}
