import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext=createContext()
const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser)
            
        
            
        })
    
        return () => {
            unsubscribe();
        }
    }, [])

    //google sign in
    const googleSignIn=(provider)=>{
        return signInWithPopup(auth,provider)
    }
    

    //createUser
    const createUser=(email,password)=>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    //logIn
    const logIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //logout
    const logOut=()=>{
        return signOut(auth)
    }

    const updatProfile=(userName,image)=>{
       return updateProfile(auth.currentUser,{
        displayName: userName, photoURL:image
      })
    }

    const authInfo={user,createUser,logIn,updatProfile,logOut,googleSignIn}

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;