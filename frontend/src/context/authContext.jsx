import {createContext,useReducer,useEffect} from "react";

export const AuthContext = createContext()

export const authReducer = (state,action)=>{
    switch (action.type){
        case 'LOGIN':
            return {user:action.payload}
        case 'LOGIN_ADMIN':
            return {admin:action.payload}
        case 'LOGOUT':
            return {user:null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children})=>{
    const [state,dispatch]=useReducer(authReducer,{
        user:null,
        admin:null
    })
    useEffect(()=>{
        const user =JSON.parse(localStorage.getItem('user'))
        const admin =JSON.parse(localStorage.getItem('admin'))
        user?dispatch({type:'LOGIN',payload:user}):null
        admin?dispatch({type:'LOGIN_ADMIN',payload:admin}):null
    },[])
    
    console.log('authContext state :',state);
    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}