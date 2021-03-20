import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 85px;
`;

const Spacer = () => {
    return <Container>
    </Container>
};

Spacer.defaultProps = {
};

export default Spacer;