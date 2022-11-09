import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';

function Token(){
    let ApiToken = localStorage.getItem("token") || ""
    if(ApiToken){
        return jwt_decode(localStorage.getItem("token")) || ""
    }
}

let TokenForLogIn = localStorage.getItem("token") || null;

export const AppContext = createContext();
const Appcontextprovider = ({children}) => {
    const [token, setToken] = useState(TokenForLogIn)
    const [name, setName] = useState()
    const [role, setRole] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        let token = Token()
        if(token){
        setName(token.name)
        setRole(token.role)
        setToken(token.email)  
        }
    },[])



    const handleLogin = (data) =>{
        if(data){
            let token = Token()
            if(token){
            setName(token.name)
            setRole(token.role)
            setToken(token.email)  
            }
        navigate("/news")
        }
    }

    const handleLogOut = () =>{
        // setIsAuth(false)
        localStorage.removeItem("token")
        setToken(null)
        setRole(null)
    }
    
    return(
        <AppContext.Provider value={{handleLogOut, handleLogin, token, name, role}}>
            {children}
        </AppContext.Provider>
    )

}

export default Appcontextprovider