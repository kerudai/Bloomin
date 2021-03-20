import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import EditAvatar from 'comps/EditAvatar';
import Input from 'comps/Input';
import Button from 'comps/Button';
import Spacer from 'comps/Spacer';
import {Link} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F5F5F5;
  min-height: 100vh;
  max-height: auto;
  min-width: 100vw;
  max-width: 100vw;
  padding-bottom: 120px;
`;

const Name = styled.div`
  width: 295px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Text = styled.div`
  width: 90%;
  cursor: pointer;
  text-align: right;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 90px;

  &:hover {
    color: #6d8a6d;
  }
`;

const ProfileEdit = () => {

  return <Container>
    <Tophead/>
    <Spacer/>
    <Link to="/" style={{ textDecoration: 'none', color: '#000000', position: 'relative', right: '-110px'}}><Text>Logout</Text></Link>
    <EditAvatar/>
    <Name>
      <Input inputhead="First Name" placeholder="First Name" width="130px"/>
      <Input inputhead="Last Name" placeholder="Last Name" width="130px"/>
    </Name>
    <Input inputhead="Description" placeholder="Description"/>
    <Input inputhead="Favorite Plant" placeholder="Favorite Plant"/>
    <Input inputhead="Password" placeholder="Password"/>
    <Input inputhead="Email" placeholder="Email"/>
    <Input inputhead="Username" placeholder="Username"/>
    <Link to="/Profile" style={{ textDecoration: 'none'}}><Button buttontext="Save changes"/></Link>
    <Spacer/>
    <Footer/>
  </Container>
}

export default ProfileEdit;