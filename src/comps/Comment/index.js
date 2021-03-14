import React from 'react';
import styled from 'styled-components';

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

// function checkCom(){
//     if(true){
        
//     }
// }

const Comment = ({comments}) => {
    return <Container>
        <ChatBox src="/comment.png" 
        // onClick={()=>{ checkCom(); }}
        /> 
        {comments}
    </Container>
}

Comment.defaultProps ={
comments: "00",
}

export default Comment;