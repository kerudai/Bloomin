import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';

const Container = styled.div`
  width: auto;
  height: 50px;
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const Username = styled.div`
  margin-left: 10px;
  font-weight: 700;
`;

const Icon = ({ onClick , username }) => {
  return <Container onClick={onClick}>
    <Avatar border="none" width="30px" height="30px" />
    <Username>{username}</Username>
  </Container>
}

Icon.defaultProps = {
  onClick: () => { },
  username: "Username"
}

export default Icon;