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
`;

const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
border-radius:10px;
width: 350px;
background-color: #fff;
box-shadow: 1px 1px 10px #C4C4C4;
`;


const ViewComments = () => {
    return <Container>
    <Tophead />
    <Spacer />
    <div className="viewcom">
    <Content>
    <FeedPost boxshadow=""/>
    <CommentInput />
    <UserComment />
    </Content>
    </div>
    <Spacer />
    <Footer />
    </Container>
}

export default ViewComments;