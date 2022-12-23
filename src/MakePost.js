import React from 'react'
import {TextField} from "@material-ui/core";
import { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Title from "./Title.js"
import "./App.css"



function MakePost(props) {
    const {signInPopUp, signOutCool, currentUser, addPostToDB, items, selectPost} = props;
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        setMessage(event.target.value);
      };
    
    const navigateHome = () => {
        navigate('/');
    };
    
    function submitPost() {
        addPostToDB(message)
        setIsOpen(true)
    }

    return (
        <div>
            <Title />
            {!currentUser && <div className="notSignedInToPost">
                <h1 className="post-start">Please sign in if you want to make a post to Bear Blog!</h1>
            </div>}
            {currentUser && <div className="signedInToPost">
                <h1 className="post-start">Start your post!</h1>
                <TextField 
                fullWidth 
                multiline={true} 
                variant="outlined"
                value={message}
                onChange={handleChange}/>
                {message != '' && <div>
                    <button className="btn-primary" onClick={submitPost}>
                        Post!
                    </button>
                    {isOpen && <div className="successfulPost">
                        <h2 class="post-start">Your post has been successfully created!</h2>
                        <button className="btn-primary" onClick={navigateHome}>Return Home</button>
                        <div>
                            <img className="thumbs-up-bear" src="https://i.pinimg.com/originals/fa/ed/62/faed622a5d07d85ac7a190f0a8c385bc.gif"/>
                        </div>
                    </div>}
                </div>}
            </div>}
        </div>
    );
}

export default MakePost;