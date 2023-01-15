import React from 'react'
import Home from './pages/Home';
import NavBar from './componnents/Navbar'
import Profile from './pages/Profile';
import { Footer } from './componnents/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDushboard from './pages/AdminDushboard';
const App = () => {
  return (
    <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                  <Route path='/profile' element={<Profile/>}/>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/Admin' element={<AdminDushboard/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
    </div>
  )
}

export default App