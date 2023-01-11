import React from 'react'
import PhotoInput from './componnents/uploader'
import NavBar from './componnents/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                  <Route path='/up' element={<PhotoInput/>}/>
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App