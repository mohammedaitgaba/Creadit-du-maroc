import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSign_up = ()=>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [data, setData] = useState([])
    const sign_up = async(formdata)=>{
        setIsLoading(true)
        setError(null)
        axios.post('http://localhost:5000/api/CRM/signup',formdata)
        .then((response) => {
            console.log(response.data);
            setIsLoading(false)
          }).catch(error => {
            setIsLoading(false)
            setError(error);
          });
    }
    return {sign_up,isLoading,error}
}