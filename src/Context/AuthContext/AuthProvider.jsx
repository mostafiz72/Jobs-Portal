import React, { Children, createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../../Firebase/Firebase.config'
const auth = getAuth(app);
export const AuthContext = createContext(null)
export default function AuthProvider( { children } ) {
 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

   // Create a new user functionality starting---------------------------------

  const NewUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
   // Sign In user functionality starting---------------------------------

  const SignInUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
   // SignOut user functionality starting---------------------------------

  const SignOutUser = ()=>{
    setLoading(true)
    return signOut(auth)
  }

   const info = {
    user,
    setUser,
    loading,
    setLoading,
    NewUser,
    SignInUser,
    SignOutUser
   }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unsubscribe()
    }
   }, [])

  return (
    <>
    <AuthContext.Provider value={info}>
        {children}
    </AuthContext.Provider>
    </>
  )
}
