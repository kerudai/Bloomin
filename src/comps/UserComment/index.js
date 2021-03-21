import React from 'react';
import styled from 'styled-components';

import Icon from 'comps/Icon';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 12px;
margin:10px;
`;

const TopSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 350px;
justify-content: space-between;
`;

const BottomSection  = styled.div`
display: flex;
flex-direction: row;
width: 350px;
align-items:flex-start;
justify-content: flex-start;
`;

const UserComment = ({date, comment}) => {
    return <Container>
        <TopSection>
        <Icon width="8px" height="8px"/>
        {date}
        </TopSection>

       <BottomSection> {comment} </BottomSection>
    </Container>
}

UserComment.defaultProps ={
date: "00/00/2021",
comment: "this is a comment"
}

export default UserComment;