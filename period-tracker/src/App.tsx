import './App.css'
import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes, Link } from "react-router-dom";


import Navbar from './components/Navbar.tsx'
import Log from './components/Log.tsx'
import Logcopy from './components/Log copy.tsx'


function App() {
  

  
  return (
    <>


    

    <HashRouter>

      <Navbar />
    
    
      <section id="center"> 


      

        <h1>Period Tracker</h1>   
        <p>Track your period with Period Tracker! All information is stored locally on your device, so your cycle information is kept secure.</p> 

        <Log></Log>
      <Logcopy></Logcopy>


<br/>




    </section>

  </HashRouter>


    </>
  )
}

export default App