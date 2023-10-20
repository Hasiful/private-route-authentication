import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase';

export const AuthContext = createContext()
const Contexts = ({children}) => {
    const [user, setUser] = useState({})
    const [isLoading, setLoading] = useState(true)
    // auth
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    // create user
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // // email verify
    const verifyUser = () => {
       return sendEmailVerification(auth.currentUser)
    }
    // login user
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const googleSignIn = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    // github sign in

    const gitSignIn = () =>{
        return signInWithPopup(auth, gitHubProvider)
    }
    
    // sign out
    const logOut = () =>{
        return signOut(auth)
    }

    // set user
    useEffect(() =>{
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () =>{
            subscribe()
        }
    })

    const userInfo = { user, createUser, logInUser, verifyUser, logOut, googleSignIn, gitSignIn, isLoading }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Contexts;