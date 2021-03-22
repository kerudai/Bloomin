import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import FeedPost from 'comps/FeedPost';
import Spacer from 'comps/Spacer';
import Button from 'comps/Button';

// import axios from 'axios';

// const [posts, setPosts] = useState([])
// const HandleGetAllPosts = async (keyword, name) => {
  
//   var resp = await axios.post("heroku link here", {
//   token:"secrettoken",
//   keyword:keyword,
//   name:name
// });

// console.log(resp);
// setPosts([...resp.date]);

// }

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

  return <Container>
    <Tophead/>
    <Spacer/>
    <div className="feed">
    <FeedPost />
{/* 
    <Button buttontext="Get All Posts" onClick={HandleGetAllPosts} />
    
    {
    posts.map((o, i)=>{
      console.log("inside the array...", o,i);

    <FeedPost 
    date={o.date}
    desc={o.description} 
    img={o.image}
    comments={o.comments}
    />
  })
  } */}

    </div>
    <Spacer/>
    <Footer/>
  </Container>
}

export default Feed;