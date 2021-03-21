import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

const Container = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const ChatBox = styled.img`
cursor: pointer;
margin:5px;
height:15px;
`;

const Comment = ({comments}) => {
    return <Container>
        <Link to="/ViewComments" style={{ textDecoration: 'none'}}>
        <ChatBox src="/comment.png" /> 
        </Link>
        {comments}
    </Container>
}

Comment.defaultProps ={
comments: "00",
}

export default Comment;