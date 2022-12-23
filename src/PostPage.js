import React from 'react';
import Title from "./Title.js"
import "./App.css"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function PostPage(props) {
    const { user, entry } = props;
    return (
        <div>
            <Title />
            {user && entry && <div className="post-info">
                <Container className="post">
                    <Typography component="div">
                        <h3 className="post-user-info">This post was made by {user}</h3>
                    </Typography>
                </Container>
                <Container className="entry">
                    <Typography component="div">
                        <p className="entry-text">{entry}</p>
                    </Typography>
                </Container>
            </div>}
        </div>
    )
}

export default PostPage;