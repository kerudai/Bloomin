import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 10px;
`;

const Input = styled.input`
width: 173px;
height: 10px;
border-radius: 10px;
border: 2px solid #DADADA;
padding: 10px;
margin-right: 5px;
outline: transparent;
`;

const Post = styled.button`
background-color: #82A482;
border: none;
border-radius: 10px;
color: white;
width: 80px;
height: 30px;
cursor: pointer;
&:hover {
    background-color: #6d8a6d;
  }  
`;

const Text = styled.div`
  color: #FFFFFF;
  font-weight: 700;
  text-transform: uppercase;
`;

const CommentInput = ({onClick}) => {
    return <Container>
<Input placeholder="Comment..." />
<Post onClick={onClick}>
    <Text>Post</Text>
</Post>
    </Container>
}

CommentInput.defaultProps = {
    onClick: () => { },
}

export default CommentInput;