import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import FeedPost from 'comps/FeedPost';
import Spacer from 'comps/Spacer';
import CommentInput from 'comps/CommentInput';
import UserComment from 'comps/UserComment';

const Container = styled.div`
background-color: #F5F5F5;
min-height: 100vh;
max-height: 100vh;
min-width: 100vw;
max-width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;


const ViewComments = () => {
    return <Container>
    <Tophead />
    <Spacer />
    <div className="viewcom">
    <FeedPost />
    <CommentInput />
    <UserComment />
    </div>
    <Spacer />
    <Footer />
    </Container>
}

export default ViewComments;