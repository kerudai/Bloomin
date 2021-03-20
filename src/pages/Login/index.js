import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Button from 'comps/Button';
import Input from 'comps/Input';
import Logo from 'comps/Logo';

const Container = styled.div`
height: 100%;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #F5F5F5;
`;

const Text = styled.div`
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      color: #6d8a6d;
    }
`;

const Login = ({createAccount}) => {

  return <Container>
    <Logo/>
    <Input inputhead="Email" placeholder="Email"/>
    <Input inputhead="Password" placeholder="Password"/>
    <Link to="/Feed" style={{ textDecoration: 'none'}}><Button buttontext="Log in"/></Link>
    <Link to="/Register" style={{ textDecoration: 'none', color: '#000000' }} ><Text onClick={createAccount}>Create Account</Text></Link>
  </Container>
}

export default Login;