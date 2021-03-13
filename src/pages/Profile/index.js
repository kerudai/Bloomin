import Bio from 'comps/Bio';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import Avatar from 'comps/Avatar';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: relative;
`;

const UserBio = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 10px;
margin-bottom: 20px;
`;

const Profile = () => {

  return <Container>
    <Tophead />
    <UserBio>
      <Avatar/>
      <Bio />
    </UserBio>
    <Footer />
  </Container>
}

export default Profile;