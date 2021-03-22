import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const MsgCont = styled.div``;

const fakedb = [
    {   
        FirstName: "Diana",
        LastName: "Murphy",
        Email: "diana@murphy",
        Password: "2356",
        UserName: "diana2233",
        Birthday: "1998-11-01",
        FavoritePlant: "artichoke",
    }
]
const Messages = ({msgs}) => {
    
    return <Container>
        Messagess
        {msgs.map(o=><MsgCont>
            {o.FirstName} - {o.LastName} - {o.Email} - {o.Password}- {o.UserName}- {o.Birthday}- {o.FavoritePlant}
        </MsgCont>)}
    </Container>
}

Messages.defaultProps = {
msgs: fakedb,
}

export default Messages;