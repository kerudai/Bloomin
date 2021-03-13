import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from 'comps/Button';
import Input from 'comps/Input';

const Container = styled.div`
`;

const Text = styled.div`
    cursor: pointer;
    text-align: center;
    margin-top: 20px;
    font-size: 18px;

    &:hover {
        color: #6d8a6d;
    }
`;

const Login = ({createAccount}) => {

  return <Container>
    <Input inputhead="Email" placeholder="Email"/>
    <Input inputhead="Password" placeholder="Password"/>
    <Button buttontext="Log in"/>
    <Text onClick={createAccount}>CREATE ACCOUNT</Text>
  </Container>
}

export default Login;