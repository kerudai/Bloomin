import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import leaficon from '../../images/small_leaf.png';

const Container = styled.div`
`;

const BioCont = styled.div`
color: #000000;
min-width:250px;
max-width:250px;
margin-left: 20px;
`;

const BioName = styled.div`
font-style: normal;
font-weight: 800;
font-size: 22px;
line-height: 30px;
margin-top:10px;
`;

const BioId = styled.div`
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
margin-top:5px;
`;

const BioDesc = styled.div`
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 20px;
margin-top:5px;
`;

const BioFav = styled.div`
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 20px;
margin-top:5px;
display:flex;
align-items:center;
 img{
     width:16px;
     height:16px;
     margin-right:3px;
 }
`;

const fakedb = [
    {
        FirstName: "Linda",
        LastName: "Jones",
        Email: "123@mail.com",
        Pass: "1234",
        Username: "linda123",
        Birthday: "1998-12-01",
        FavoritePlant: "Tulips",
        Bio: "Plants make me happy. Join me on my plant-loving journey. 😊🌱",
    }
]


const Bio = ({name, id, desc, fav, userinfo}) => {
  return <Container>
 {userinfo.map(o=> <BioCont>
      <BioName>
          {o.FirstName} {o.LastName}
      </BioName>
      <BioId>
          {o.Username}
      </BioId>
      <BioDesc>
          {o.Bio}
      </BioDesc>
      <BioFav>
          <img src ={leaficon}/>Favourite Plant: {o.FavoritePlant}
      </BioFav>
  </BioCont> )}
  </Container>
}

Bio.defaultProps = {
    // name: "Linda Jones",
    // id: "@linda2256",
    // desc: "Plants make me happy. Join me on my plant-loving journey. 😊🌱",
    // fav: "Tulips",
    userinfo: fakedb
}

export default Bio;