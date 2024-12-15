import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { user, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();  /// ami ekhon kon path a asi sei tar location dei
    // setLoading(true);
    if(loading){
        return <div>Loading...</div>;
    }

    if( user ){
        return children;
    }
  return <Navigate to="/login" state={location?.pathname} />;   //// onno kono somoy redirect korbe nah ata ata tokhon e paibe jokhon navigate kore login page a jabe.
}
