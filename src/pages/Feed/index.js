import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import FeedPost from 'comps/FeedPost';
import Spacer from 'comps/Spacer';


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
    <FeedPost boxshadow="1px 1px 10px #C4C4C4"/>
    </div>
    <Spacer/>
    <Footer/>
  </Container>
}

export default Feed;