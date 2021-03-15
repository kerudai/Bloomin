import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import leaficon from '../../images/small_leaf.png';


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

const Bio = ({name, id, desc, fav}) => {
  return <BioCont>
      <BioName>
          {name}
      </BioName>
      <BioId>
          {id}
      </BioId>
      <BioDesc>
          {desc}
      </BioDesc>
      <BioFav>
          <img src ={leaficon}/>Favourite Plant: {fav}
      </BioFav>
  </BioCont>
}

Bio.defaultProps = {
    name: "Linda Jones",
    id: "@linda2256",
    desc: "Plants make me happy. Join me on my plant-loving journey. 😊🌱",
    fav: "Tulips"
}

export default Bio;