import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignin_Admin = ()=>{
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch}=useAuthContext()
    const sign_in_admin = async(formdata)=>{
        setIsLoading(true)
        setError(null)
        axios.post('http://localhost:5000/api/CRM/AdminAuth',formdata)
        .then((response) => {
            // save the user to local storage
            localStorage.setItem('admin',JSON.stringify(response.data))
            // update the user context
            dispatch({type:'LOGIN_ADMIN',payload:response.data})
            setIsLoading(false)
            navigate("/admin")
          }).catch(error => {
            setIsLoading(false)
            setError(error.response.data.message);
          });
    }
    return {sign_in_admin,isLoading,error}
}