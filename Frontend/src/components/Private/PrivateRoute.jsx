import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from './Appcontextprovider'

const PrivateRoute = ({ children }) => {
    
    const {token} = useContext(AppContext)
    return token ? children : <Navigate to="/login" />   

}

export default PrivateRoute