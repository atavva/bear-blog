import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.js';
import Profile from './Profile.js';
import Signin from "./Signin.js";
import { useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';

import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MakePost from "./MakePost.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyDSJwKWKgzd8W49qVYVvjY3kvGHpciWyYU",
//   authDomain: "bear-blog.firebaseapp.com",
//   projectId: "bear-blog",
//   storageBucket: "bear-blog.appspot.com",
//   messagingSenderId: "266223683560",
//   appId: "1:266223683560:web:3a30436c38aa3df2b5865d"
// };

// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();

// const auth = getAuth(app);
// function signInPopUp() {
//   signInWithPopup(auth, provider);
// }

// function signOutCool() {
//   signOut(auth, provider);
// }
// var passedDownUser = {
//   displayName: "default"
// };

// onAuthStateChanged(auth, (user) => {
// // user argument is null if a user signs out.
// console.log("auth state changed")
// if (user) {
//   passedDownUser = user;
//   console.log("hello you are signed in")
//   console.log(passedDownUser)
//   // changeSignedInState(true)
//   // setUser(user)
// } else {
//   passedDownUser = null;
//   console.log("you are signed out")
//   // changeSignedInState(false)
// }
// });

// let props = {
//   signInPopUp: signInPopUp,
//   signOutCool: signOutCool,
//   user: passedDownUser
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App user={passedDownUser}/>,
//   },
//   {
//     path: "/profile/:profileId",
//     element: <Profile/>,
//   },
//   {
//     path: "/signin",
//     element: <Signin {...props}/>,
//   },
//   {
//     path: "/makepost",
//     element: <MakePost />
//   }
// ]);

const root = createRoot(document.getElementById("root"));
root.render(
    <Router>
      <App />
    </Router>
)