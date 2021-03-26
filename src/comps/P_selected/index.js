import React from 'react';
import styled from 'styled-components';
import BackIcon from 'images/back_button.png';
import Cactus1 from 'images/cactus1.jpg';
import Input from 'comps/Input';

const Container = styled.div`
min-width: 349px;
min-height: 396px;
max-width: 349px;
max-height: 396px;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
// position: reletive;
border-radius: 10px;
`;
const Back = styled.div`
min-width: 18px;
min-height: 44px;
max-width: 18px;
max-height: 44px;
background-image: url(${BackIcon});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
// background-color: blue;
display: inline-flex;
position: relative;
left: 10px;
`;
const PhotosInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const Photo = styled.div`
min-width: 283px;
min-height: 255px;
max-width: 283px;
max-height: 255px;
background-image: url(${Cactus1});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
border-radius: 10px;
`;

const P_selectd = ({onBack}) =>{
    return <Container>
       <Back onClick={()=>{
           onBack()
        }}/>
       <PhotosInput>
           <Photo />
           <Input inputhead="" placeholder="Write a message..."/>
       </PhotosInput>
    </Container>
};

P_selectd.defaultProps = {
onBack: ()=>{}

};

export default P_selectd;