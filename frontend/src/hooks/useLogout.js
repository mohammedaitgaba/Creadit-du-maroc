import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogout =()=>{
    const navigate = useNavigate();

    const {dispatch} = useAuthContext()
    const logout = ()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('admin')
        dispatch({type:'LOGOUT'})
        navigate("/")
    }
    return {logout}
}