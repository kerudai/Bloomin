import React from 'react';
import styled from 'styled-components';
import Icon from 'comps/Icon';
import Like from 'comps/Like';
import { Link, useHistory } from 'react-router-dom';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
width: 350px;
min-height: 100px;
max-height: 395px;
border-radius:10px;
background-color: #fff;
// box-shadow: 1px 1px 10px #C4C4C4;
box-shadow:  ${props => props.boxshadow ? props.boxshadow : ""};
color: black;
margin: 10px;
`;

const Box = styled.div`
width: 300px;
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
margin:10px;
`;

const Photo = styled.img`
width:273px;
height:252px;
`;

const Description = styled.div`
font-size:12px;
margin-top:7px;
align-items:flex-start;
justify-content:flex-start;
flex-direction: row;
width: 275px;
`;

const BottomSection = styled.div`
display:flex;
justify-content:space-between;
width: 100%;
font-size:12px;
margin:15px;
`;

const Comment = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const CommentIcon = styled.img`
cursor: pointer;
margin:5px;
height:15px;
`;

const fakedb = [
{
    userID: "bob",
    PostDate: "01/01/2017",
    desc: "hello hi hey",
    PhotoUrl: "https://www.thespruce.com/thmb/oxE3VdaeQdrW8GT6ZEsQvpdVhNQ=/2000x2000/smart/filters:no_upscale()/spider-plants-chlorophytum-definition-1902773-02-4fc579ee1b874f4ca148482782d163b6.jpg",
    comments: 12,
}
]


const FeedPost = ({date, desc, img, boxshadow, comments,posts}) => {
    return  <Container>
    
    {posts.map(o=><Wrapper boxshadow = {boxshadow}>

        {/* <Box>
        <TopSection>
        <Icon />
        {date}
        </TopSection>

        <Photo src={img} />
        <Description> {desc} </Description>

        <BottomSection>
        <Like />
        <Comment>
            <Link to="/ViewComments" style={{ textDecoration: 'none'}}>
            <CommentIcon src="/chatbox.png"/> </Link>  {comments} 
        </Comment>
        </BottomSection>
        </Box> */}

         <Box>
        <TopSection>
        <Icon username={o.userID}/>
        {o.PostDate}
        </TopSection>

        <Photo src={o.PhotoUrl} />
        <Description> {o.desc} </Description>

        <BottomSection>
        <Like />
        <Comment>
            <Link to="/ViewComments" style={{ textDecoration: 'none'}}>
            <CommentIcon src="/chatbox.png"/> </Link>  {o.comments} 
        </Comment>
        </BottomSection>
        </Box>

    </Wrapper> )}
    </Container>
}

FeedPost.defaultProps ={
// date: "00/00/2021",
// desc: "this is a description",
// img: "https://www.thespruce.com/thmb/oxE3VdaeQdrW8GT6ZEsQvpdVhNQ=/2000x2000/smart/filters:no_upscale()/spider-plants-chlorophytum-definition-1902773-02-4fc579ee1b874f4ca148482782d163b6.jpg",
// boxshadow: "1px 1px 10px #C4C4C4",
// comments: "00"
posts: fakedb,
}

export default FeedPost;