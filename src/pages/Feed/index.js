import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import FeedPost from 'comps/FeedPost';
import Spacer from 'comps/Spacer';
import Button from 'comps/Button';
import Messages from 'comps/Messages';
import axios from 'axios';

const Container = styled.div`
// padding-top: 85px;
// padding-bottom: 85px;
background-color: #F5F5F5;
min-height: 100vh;
max-height: 100vh;
min-width: 100vw;
max-width: 100vw;
`;


const Feed = () => {
  
const [posts, setPosts] = useState([])
const GetPosts = async () => {
  
 var resp = await axios.get("https://bloominuserdb.herokuapp.com/api/posts");
 console.log("get posts", resp);
 setPosts(resp.data.posts);

}

useEffect(()=>{
  GetPosts();
}, []);


// const Feed = () => {

//   const [msgs, setMsgs] = useState([]);
//   const GetMsgs = async () =>{
//     //axios promise - connect
//     //retrieve
//     //6. Handler function does the first connection, makes call and connects
//     var resp = await axios.get("https://bloominuserdb.herokuapp.com/api/users");
//     //7. retrieve data
//     console.log("get message", resp);
//     //8. update state
//     setMsgs(resp.data.users);
// }

// // Birth Life Cycle;commonly used
// useEffect(()=>{
//     // alert("Birth Life Cycle for useEffect");
//     //2. Interaction - when the page loads
//     GetMsgs();
// }, []);

  return <Container>
    <Tophead/>
    <Spacer/>
    <div className="feed">
   
    <FeedPost posts={posts} />
 
   {/* <Messages msgs={msgs}/>  */}
    </div>
    <Spacer/>
    <Footer/>
  </Container>
}

export default Feed;