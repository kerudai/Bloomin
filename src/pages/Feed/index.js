import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';

const Container = styled.div`
// padding-top: 85px;
// padding-bottom: 85px;
background-color: #F5F5F5;
`;

const Feed = () => {

  return <Container>
    <Tophead/>
    
    <Footer/>
  </Container>
}

export default Feed;