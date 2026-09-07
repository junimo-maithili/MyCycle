import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from './components/Navbar.tsx'
import Log from './components/Log.tsx'
import Logcopy from './components/Log copy.tsx'
import Home from './components/Home.tsx'



function App() {
  
  return (
    <>

    <BrowserRouter>

      <Navbar />

      <h1 className="title">MyCycle</h1> 
      <br/><br/>  

    
    
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