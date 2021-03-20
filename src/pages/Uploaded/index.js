import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import './uploaded.scss';
import Header from 'comps/Header';
import P_selectd from 'comps/P_selected';
import Button from 'comps/Button';
import Spacer from 'comps/Spacer';

const Container = styled.div`
// padding-top: 85px;
// padding-bottom: 85px;
min-height: 100vh;
max-height: 100vh;
min-width: 100vw;
max-width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;

const Uploaded = () => {

  return <Container className="main">
  <Tophead/>
  <Spacer/>
  <Header headtext="Bloom it goes!"/>
  <P_selectd />
  <Button buttontext="POST" />
  <Footer/>
</Container>
}

export default Uploaded;