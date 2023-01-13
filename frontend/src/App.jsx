import React from 'react'
import PhotoInput from './componnents/uploader'
import Home from './pages/Home';
import NavBar from './componnents/Navbar'
import Profile from './pages/Profile';
import { Footer } from './componnents/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                  <Route path='/up' element={<PhotoInput/>}/>
                  <Route path='/profile' element={<Profile/>}/>
                  <Route path='/' element={<Home/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
    </div>
  )
}

export default App