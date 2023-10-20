import React, { useContext } from 'react';
import { AuthContext } from '../contexts/contexts';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const { user, isLoading } = useContext(AuthContext)
    
    if(isLoading){
        return <h2>Loading .....</h2>
    }

    if(user && user.uid){
        return children
    }
    return <Navigate to='/sign'></Navigate>
};

export default PrivateRouter;