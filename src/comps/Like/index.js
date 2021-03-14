import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const Heart = styled.img`
cursor: pointer;
margin: 5px;
height:15px;
`;

// function likePost(){
//     if(true){
        
//     }
// }

const Like = ({likes}) => {
    return <Container>
        <Heart src="/EmptyLike.png"  
        // onClick={()=>{ likePost(); }}
        />
        {likes}
    </Container>
}

Like.defaultProps ={
likes: "00",
}

export default Like;