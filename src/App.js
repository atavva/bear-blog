import logo from './logo.svg';
import img from './img.jpg';
import './App.css'; 
import './MakePost.js';
import Title from './Title.js';
import Signin from "./Signin.js";
import {
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import MakePost from "./MakePost.js";
import { useEffect, useState } from 'react';
import Homepage from './Homepage.js'
import PostPage from "./PostPage.js"
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { getFirestore, addDoc, collection, query, where, getDocs, Timestamp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDSJwKWKgzd8W49qVYVvjY3kvGHpciWyYU",
   authDomain: "bear-blog.firebaseapp.com",
   projectId: "bear-blog",
   storageBucket: "bear-blog.appspot.com",
   messagingSenderId: "266223683560",
   appId: "1:266223683560:web:3a30436c38aa3df2b5865d"
   };

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const db = getFirestore(app);

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [items, setItems] = useState(null)
  const [selectedUser, setSelectedUser] = useState("")
  const [selectedEntry, setSelectedEntry] = useState("")


  function selectPost(postUser, postEntry) {
    console.log("selectposts called on", postUser, postEntry)

    setSelectedUser(postUser)
    setSelectedEntry(postEntry)
  }

  function signInPopUp() {
    signInWithPopup(auth, provider);
  }
  
  function signOutCool() {
    signOut(auth, provider);
  }

  async function allPosts() {
    console.log("allposts called")
    let entryRef = collection(db, "posts")
    const q = query(entryRef);
    const querySnapshot = await getDocs(q);
    let itemsList = []

    querySnapshot.docs.map(doc => itemsList.push(
        {
          username: doc.data().username,
          entry: doc.data().entry
        })
    );
    console.log(itemsList)
    setItems(itemsList)
  }

  useEffect(() => {
  allPosts()
 }, []
  )

  async function addPostToDB(text) {
    let entryRef = collection(db, "posts")

    const newEntryRef = await addDoc(entryRef, {
      username: currentUser.displayName,
      entry: text,
  });
  }
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
  
      // console.log("auth state changed")
      if (user) {
        
        // console.log("hello you are signed in")
        setCurrentUser(user)
      } else {
        console.log("you are signed out")
        setCurrentUser(null)
      }
      });
   }, []
    )
  

  
  let props = {
    signInPopUp: signInPopUp,
    signOutCool: signOutCool,
    currentUser: currentUser,
    addPostToDB: addPostToDB,
    items: items,
    selectPost: selectPost
  }

  return (
    <div className="App">
        <Routes>
          <Route path = "/" element = {<Homepage {...props}/>} />
          <Route path = "/signin" element = {<Signin {...props}/>}/>
          <Route path = "/makepost" element = {<MakePost {...props}/>}/> 
          <Route path = "/post" element = {<PostPage user={selectedUser} entry={selectedEntry}/>}/>
        </Routes>
    </div>
  );
}

export default App;