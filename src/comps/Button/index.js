import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 195px;
  height: 75px;
  color: #FFFFFF;
  background-color: #82A482;
  border: none;
  border-radius: 10px;
  margin:20px;
`;

const Text = styled.div`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
`;

const Button = ({buttontext}) => {
  return <Container>
    <Text>{buttontext}</Text>
  </Container>
}

Button.defaultProps = {
buttontext: "Button"
}

export default Button;