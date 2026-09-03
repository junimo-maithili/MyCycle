import './App.css'
import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


import Navbar from './components/Navbar.tsx'
import Log from './components/Log.tsx'
import Logcopy from './components/Log copy.tsx'
import Home from './components/Home.tsx'



function App() {
  
  return (
    <>

    <BrowserRouter>

      <Navbar />

      <h1>Period Tracker</h1>   

    
    
      <section id="center">

    </section>


    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/log-period" element={<Log />} />
      <Route path="/view-records" element={<Logcopy/>} />
    </Routes>


  </BrowserRouter>


    </>
  )
}

export default App