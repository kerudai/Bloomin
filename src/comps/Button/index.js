import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 195px;
  height: 75px;
  color: #FFFFFF;
  background-color: #82A482;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #6d8a6d;
  }  
`;

const Text = styled.div`
  color: #FFFFFF;
  font-size: 18pt;
  font-weight: bold;
`;

const Button = ({ onClick, buttontext }) => {
  return <Container onClick={onClick}>
    <Text>{buttontext}</Text>
  </Container>
}

Button.defaultProps = {
  onClick: () => { },
  buttontext: "Button"
}

export default Button;