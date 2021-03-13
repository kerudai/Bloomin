import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import pencilimg from '../../images/pencil.svg';

const Container = styled.div`
  margin-top: 20px;
  margin-left: 15px;
`;

const Pencil = styled.img`
  cursor: pointer;
`;

const EditAvatar = ({ onClick }) => {
  return <Container>
    <Avatar />
    <Pencil src={pencilimg} onClick={onClick}></Pencil>
  </Container>
}

EditAvatar.defaultProps = {
  onClick: () => { }
}

export default EditAvatar;