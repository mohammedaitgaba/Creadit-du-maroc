import React from 'react'
import Home from './pages/Home';
import NavBar from './componnents/Navbar';
import UserDushboard from './pages/UserDushboard';
import { Footer } from './componnents/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDushboard from './pages/AdminDushboard';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                  <Route path='/UserDushboard/*' element={<UserDushboard/>}/>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/Admin' element={<AdminDushboard/>}/>
                </Routes>
                <Footer />
                <ToastContainer/>
            </BrowserRouter>
    </div>
  )
}

export default App