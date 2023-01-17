import React from 'react'
import { Navigate , Outlet } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';
const ProtectedRoutes = () => {
    const {user}=useAuthContext()
  return (
    user?.token? <Outlet /> : <Navigate to="/"/>
  )
}

export default ProtectedRoutes