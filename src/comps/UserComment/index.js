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

const Info = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 12px;
`;

const TopSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 280px;
justify-content: space-between;
`;

const BottomSection = styled.div`
display: flex;
flex-direction: row;
width: 280px;
align-items:flex-start;
justify-content: flex-start;
margin: 10px;
`;

const fakedb = [
    {   
        UserID: "Tina",
        CommentDate: "03/25/2021",
        CommentContent: "la la di da doo"
    }
]

const UserComment = ({date, comment, comments}) => {

    return <Container>
      
       {comments.map(o=><Info>
       
        <TopSection>
        <Icon width="8px" height="8px" username={o.UserID}/>
        {o.CommentDate}
        </TopSection> 

        <BottomSection> {o.CommentContent} </BottomSection>

        </Info> )}

    </Container>
}

UserComment.defaultProps ={
// date: "00/00/2021",
// comment: "this is a comment"
comments: fakedb
}

export default UserComment;