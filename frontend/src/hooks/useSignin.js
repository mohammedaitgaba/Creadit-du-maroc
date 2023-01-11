import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSign_in = ()=>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch}=useAuthContext()
    const sign_in = async(formdata)=>{
        setIsLoading(true)
        setError(null)
        axios.post('http://localhost:5000/api/CRM/signin',formdata)
        .then((response) => {
            // save the user to local storage
            localStorage.setItem('user',JSON.stringify(response.data))
            // update the user context
            dispatch({type:'LOGIN',payload:response.data})
            setIsLoading(false)
          }).catch(error => {
            setIsLoading(false)
            setError(error.response.data.message);
          });
    }
    return {sign_in,isLoading,error}
}