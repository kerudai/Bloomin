import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
width: 350px;
height: 395px;
border-radius:10px;
background-color: #fff;
box-shadow: 1px 1px 10px #C4C4C4;
color: black;
margin: 10px;
`;

const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
`;

const TopSection = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
font-size:12px;
`;

const Photo = styled.img`
width:273px;
height:252px;
`;

const Description = styled.div`
font-size:12px;
margin-top:7px;
`;

const BottomSection = styled.div`
display:flex;
justify-content:space-between;
width: 100%;
font-size:12px;
margin:15px;
`;

const Likes = styled.div`
`;

const Comments = styled.div`
`;


const FeedPost = ({date, desc, likes, comments}) => {
    return <Container>

        <Box>
        <TopSection>
        <p>icon comp here</p>
        {date}
        </TopSection>

        <Photo />
        
        <Description>{desc}</Description>

        <BottomSection>
            <Likes>Comp {likes}</Likes>
            <Comments>Comp {comments}</Comments>
        </BottomSection>
        </Box>

    </Container>
}

FeedPost.defaultProps ={
date: "00/00/2021",
desc: "this is a description",
likes: "00",
comments: "00",
}

export default FeedPost;