import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Our_team from './Pages/Our_team'
import Registration from './Pages/Registration'
import Gallery from './Pages/Gallery'
import Verify from './Pages/Verify'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/our_team' element={<Our_team />} />
    <Route path='/registration' element={<Registration />} />
    <Route path='/gallery' element={<Gallery/>} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/verify' element={<Verify/>} />
   </Routes>
  
    </>
  )
}

export default App
