import React, {useRef, useEffect, useState} from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      hello world
      <BrowserRouter>
      <Link to = "https://google.com/">pets</Link>
      <Link to = {"/pets"}> Go to pets </Link>
      </BrowserRouter>
    </div>
  )
}
