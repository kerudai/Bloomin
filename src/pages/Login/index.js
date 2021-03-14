import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from 'comps/Button';
import Input from 'comps/Input';
import Logo from 'comps/Logo';

const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Text = styled.div`
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    text-transform: uppercase;

    &:hover {
      color: #6d8a6d;
    }
`;

const Login = ({createAccount}) => {

  return <Container>
    <Logo/>
    <Input inputhead="Email" placeholder="Email"/>
    <Input inputhead="Password" placeholder="Password"/>
    <Button buttontext="Log in"/>
    <Text onClick={createAccount}>Create Account</Text>
  </Container>
}

export default Login;