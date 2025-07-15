import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
        
        </BrowserRouter>

        
    </>
  )
}

export default App
