import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import "../src/App.css"
import Footer from './Components/Footer'
import Copyright from './Components/Copyright'
import About from './Components/About'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
      <Footer/>
      <Copyright/>
    </BrowserRouter>
  )
}

export default App