import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.img`
  width: ${props => props.width ? props.width : ""};
  height: ${props => props.height ? props.height : ""};
  object-fit: cover;
  border: ${props => props.border ? props.border : ""};
  border-radius: 100%;
`;

const Avatar = ({ avatarsrc , border , width , height }) => {
  return <Container src={avatarsrc} border={border} width={width} height={height}>
  </Container>
}

Avatar.defaultProps = {
  avatarsrc: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
  border: "5px solid #82A482",
  width: "100px",
  height: "100px"
}

export default Avatar;