import React from 'react';
import styled from 'styled-components';
import LogoPic from 'images/logo.png';

const Container = styled.div`
min-width: 160px;
min-height: 163px;
max-width: 160px;
max-height: 163px;
background-image: url(${LogoPic});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

const Logo = () => {
    return <Container>
        
    </Container>
};

Logo.defaultProps = {

};

export default Logo;