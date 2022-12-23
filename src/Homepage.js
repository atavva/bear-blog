import React from 'react';
import MakePost from "./MakePost.js";
import Title from "./Title.js";
import Signin from "./Signin.js";
import { Link } from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PostPage from "./PostPage.js"
import {useState} from 'react';
import './App.css'

function Post(props) {
    const { username, entry, selectPost} = props;
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();

    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };

    const navigateToPost = () => {
        console.log(username)
        console.log(entry)
        selectPost(username, entry)
        
        navigate('/post')
    };

    return (
        <Container className="post" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {!isHovering && <Typography component="div">
                <h2 className="username">{username}</h2>
                <p className='post-content'>{entry}</p>
            </Typography>}
            {isHovering && <Typography component="div" onClick={navigateToPost}>
                <h2 className="post-hover">Read More</h2>
            </Typography>}
        </Container>
    )
}

function Homepage(props) {
    const {signInPopUp, signOutCool, currentUser, addPostToDB, items, selectPost} = props;
return(

<div style={{"position":"relative"}}>
    <div className="App">
      <Title/>
      <header className="App-header" style={{backgroundColor:"#89CFF0"}}>
      <div class="container">
        <h3 class="title">
            <span class="title-word title-word-1">Welcome </span>
            <span class="title-word title-word-2">To </span>
            <span class="title-word title-word-3">Bear </span>
            <span class="title-word title-word-4">Blog!</span>
        </h3>
        </div>
        <div className="header-pics">
            <img className="high-five-bear" src="https://media.tenor.com/2yPOtCY3ehwAAAAC/animated-bear.gif"/>
            <img id="oskipic" src="https://news.berkeley.edu/wp-content/uploads/2016/09/Oskicupcake500-1.jpg" alt="oski-img2"/>
            <img className="blushing-bear" src="https://media.tenor.com/k5JjVldxKDAAAAAC/bear-embarrassed.gif"/>
        </div>
      </header>
      
    </div>
    {items && <div className="posts">
        {
            items.map(item => <Post username={item.username} entry={item.entry} selectPost={selectPost} />)
        }
    </div>}
</div>

);
}



export default Homepage; 

