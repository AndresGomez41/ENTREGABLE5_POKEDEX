import React from 'react';
import { Outlet, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoutes = () => {

    const user = useSelector( state => state.user)
    console.log(user)

    if(user){
        return <Outlet/>
    }else{
        return <Navigate to="/" />
    }
};

export default PrivateRoutes;