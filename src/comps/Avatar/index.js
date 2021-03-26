import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.img`
  width: ${props => props.width ? props.width : ""};
  height: ${props => props.height ? props.height : ""};
  object-fit: cover;
  border: ${props => props.border ? props.border : ""};
  border-radius: 100%;
`;

const fakedb = [
  {
    
  }
]

const Avatar = ({ avatarsrc , border , width , height }) => {
  return <Container src={avatarsrc} border={border} width={width} height={height}>
  </Container>
}

Avatar.defaultProps = {
  avatarsrc: "https://images.pexels.com/photos/5413991/pexels-photo-5413991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  border: "5px solid #82A482",
  width: "100px",
  height: "100px"
}

export default Avatar;