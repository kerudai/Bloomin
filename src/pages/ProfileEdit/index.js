import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import EditAvatar from 'comps/EditAvatar';
import Input from 'comps/Input';
import Button from 'comps/Button';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Name = styled.div`
width: 295px;
display: flex;
justify-content: space-between;
`;

const ProfileEdit = () => {

  return <Container>
    <Tophead/>
    <EditAvatar/>
    <Name>
      <Input inputhead="First Name" placeholder="First Name" width="130px"/>
      <Input inputhead="Last Name" placeholder="Last Name" width="130px"/>
    </Name>
    <Input inputhead="Description" placeholder="Description"/>
    <Input inputhead="Favorite Plant" placeholder="Favorite Plant"/>
    <Input inputhead="Password" placeholder="Password"/>
    <Input inputhead="Email" placeholder="Email"/>
    <Button buttontext="Save changes"/>
    <Footer/>
  </Container>
}

export default ProfileEdit;