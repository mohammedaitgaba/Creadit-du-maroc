import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import NavBar from './componnents/Navbar';
import AdminAuth from './pages/AdminAuth';
import UserDushboard from './pages/UserDushboard';
import { Footer } from './componnents/Footer';
import AdminDushboard from './pages/AdminDushboard';
import ProtectedRoutes from './utils/ProtectedRoutes';
import OnlyAdminRouts from './utils/OnlyAdminRouts';
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={[<Home/>, <Footer/>]}/>
            <Route path='/AdminLogin' element={<AdminAuth/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/UserDushboard/*' element={<UserDushboard/>}/>
            </Route>            
            <Route element={<OnlyAdminRouts/>}>
              <Route path='/Admin/*' element={<AdminDushboard/>}/>
            </Route>
          </Routes>
          <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App