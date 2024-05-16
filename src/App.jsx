import React from 'react'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Home/Home'
import { Route,Routes } from 'react-router-dom'
import KantaktLink from './pages/kontaktlink'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
      <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KantaktLink" element={<KantaktLink/>} />
      </Routes>

      <Footer/>
      
      
      </>
  )
}

export default App