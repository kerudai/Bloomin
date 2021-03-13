import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Head = styled.div`
  font-size: 30pt;
  margin-bottom: 5px;
`;

const Header = ({ headtext }) => {
  return <Container>
    <Head>{headtext}</Head>
  </Container>
}

Header.defaultProps = {
  headtext: "Header",
}

export default Header;