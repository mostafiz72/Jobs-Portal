import React, { useContext } from 'react'
import AuthContext from "../Context/AuthContext/AuthProvider"
export default function useAuth() {
    const context = useContext(AuthContext);
  return context;
}
