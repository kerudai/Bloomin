import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';

const Container = styled.div`
padding-top: 85px;
padding-bottom: 85px;
`;

const Uploaded = () => {

  return <Container>
  <Tophead/>
  
  <Footer/>
</Container>
}

export default Uploaded;