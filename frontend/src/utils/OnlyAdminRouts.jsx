import React from 'react'
import { Navigate , Outlet } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';
const OnlyAdminRouts = () => {
    const {admin}=useAuthContext()
  return (
    admin?.token? <Outlet /> : <Navigate to="/"/>
  )
}

export default OnlyAdminRouts