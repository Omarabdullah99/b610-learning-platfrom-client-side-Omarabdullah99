import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext=createContext()
const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true)
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser)
            setLoading(false)
            
        
            
        })
    
        return () => {
            unsubscribe();
        }
    }, [])

    //google sign in
    const googleSignIn=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    

    //createUser
    const createUser=(email,password)=>{
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    //logIn
    const logIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updatProfile=(userName,image)=>{
       return updateProfile(auth.currentUser,{
        displayName: userName, photoURL:image
      })
    }

    const authInfo={user,createUser,logIn,updatProfile,logOut,googleSignIn,loading}

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;