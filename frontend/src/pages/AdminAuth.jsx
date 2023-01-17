import React, { useState,useEffect } from "react";
import { useSignin_Admin } from "../hooks/useSigninAdmin";

const AdminAuth = () => {
    const handleChange = (e)=>{
        setFormData((previousState)=>({
            ...previousState,
            [e.target.name] : e.target.value,
        }))
      }
    const [formData,setFormData]=useState({
        Email:'',
        Password:''
      })
    const {Email,Password}=formData

    const {sign_in_admin, isLoading, error}=useSignin_Admin()

    const Sign_in = async()=>{
        await sign_in_admin(formData)
    }
  return (
    <div className="w-full h-[600px] flex justify-center items-center">
    <div className="w-3/4 lg:w-3/6 m-auto text-[#232122] ">
      <form className="bg-[#e9e9e9] p-5">

        <div className="text-center text-lg font-bold">Sign in</div>
        <div className="relative z-0 sm:mb-4 mb-0 w-full group">
          <label htmlFor="floating_email">Email address</label>
          <input
            type="email"
            id="floating_email"
            className="block py-1.5 px-1 w-full text-sm text-gray-90 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            name="Email" value={Email} onChange={handleChange}
          />
        </div>
          <div className=" md:gap-6">
            <div className="relative z-0 sm:mb-4 mb-0 w-full group">
              <label htmlFor="password">password</label>
              <input
                type="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                name="Password" value={Password} onChange={handleChange}
              />
            </div>
          </div>
          <div className="underline underline-offset-1 text-primary hover:text-senary cursor-pointer">Not registred</div>
          <button type="button" onClick={()=>Sign_in()} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
      </form>
    </div>
  </div>
  )
}

export default AdminAuth