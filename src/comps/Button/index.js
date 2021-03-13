import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.button`
  width: 195px;
  height: 75px;
  color: #FFFFFF;
  background-color: #82A482;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 20px;

  &:hover {
    background-color: #6d8a6d;
  }  
`;

const Text = styled.div`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Button = ({ onClick, buttontext }) => {
  return <Container onClick={onClick}>
    <ButtonBox>
      <Text>{buttontext}</Text>
    </ButtonBox>
  </Container>
}

Button.defaultProps = {
  onClick: () => { },
  buttontext: "Button"
}

export default Button;