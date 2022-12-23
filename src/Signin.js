import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import "./Signin.css";
import "./App.css";
import Title from "./Title.js";


function Signin(props) {

    const {signInPopUp, signOutCool, currentUser, addPostToDB, items, selectPost} = props;
    
    useEffect(() => {
        console.log(currentUser)
    },[])

    return (
        <div className="container">
            <Title />
            {!currentUser && 
            <div className="sign-in-prep" >
                <h1 className="signInHeader">Please Sign In To Make Posts</h1>
                <button id="signInBtn" className="btn-primary" onClick={signInPopUp}>Sign in with Google</button>
            </div>}
            {currentUser && <div classname="sign-in-prep">
                <h1 className="welcomeMessage" >Hello,  {currentUser.displayName}</h1>
                <button id="signOutBtn" className="btn-primary" onClick={signOutCool}>Sign Out</button>
                <div>
                <img className="dancing-bear" src="https://i.pinimg.com/originals/5b/11/db/5b11dbec2fc43fb686bb30e49163c1cc.gif"/>
                </div>
            </div>}
        </div>
    );
}





export default Signin;