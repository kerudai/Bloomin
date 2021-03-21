import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 350px;
height: 395px;
border-radius:10px;
background-color: #fff;
box-shadow: 1px 1px 10px #C4C4C4;
color: black;
margin: 10px;
`;

const Border = styled.div`
display: flex;
flex direction: column;
width: 295px;
height:315px;
border: solid 2px #DADADA;
border-radius: 10px;
color: black;
`;

const Input = styled.input`
border: none;
width:90%;
height: 10px;
padding: 10px;
margin:10px;
color: black;
outline: none;
`;

const Photo = styled.img`
cursor: pointer;
width: 15px;
height: 15px;
position: relative;
margin-top:290px;
right: 10px;
`;

// function addPohto(){
//     if(true){
        
//     }
// }

const Post = () => {
    return <Container>
        <Border>
        <Input placeholder="Write a message or add a photo..."/>
        <Photo src="/AddPhoto.png" 
        // onClick={()=>{ addPhoto(); }}
        />
        </Border>
    </Container>
}

Post.defaultProps ={

}

export default Post;