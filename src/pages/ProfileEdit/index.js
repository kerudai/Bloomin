import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import EditAvatar from 'comps/EditAvatar';
import Input from 'comps/Input';
import Button from 'comps/Button';
import {Link} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 75px;
  background-color: #F5F5F5;
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
  margin-top: 95px;
  font-size: 18px;
  text-transform: uppercase;

  &:hover {
    color: #6d8a6d;
  }
`;

const ProfileEdit = () => {

  return <Container>
    <Tophead/>
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
    <br/>
    <Footer/>
  </Container>
}

export default ProfileEdit;