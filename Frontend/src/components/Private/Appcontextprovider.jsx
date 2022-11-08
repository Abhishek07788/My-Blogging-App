import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom';

let Apitoken = JSON.parse(localStorage.getItem("token")) || ""
// console.log('Apitoken: ', Apitoken);

export const AppContext = createContext();
const Appcontextprovider = ({children}) => {
    const [token, setToken] = useState(Apitoken.token)
    const [name, setName] = useState(Apitoken.name)
    const [role, setRole] = useState(Apitoken.role)

    
    const navigate = useNavigate()

    const handleLogin = (data) =>{
        if(data.token){
        setName(data.name)
        setToken(data.token)
        setRole(data.role)
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