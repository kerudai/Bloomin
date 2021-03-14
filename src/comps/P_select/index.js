import React from 'react';
import styled from 'styled-components';
import Cross from 'images/x.png';
import Cactus1 from 'images/cactus1.jpg';
import Pot1 from 'images/pot1.png';
import Cactus2 from 'images/cactus2.png';

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
const X = styled.div`
min-width: 18px;
min-height: 44px;
max-width: 18px;
max-height: 44px;
background-image: url(${Cross});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
// background-color: blue;
display: inline-flex;
position: relative;
left: 300px;
`;
const ChoosePhotos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const Photos = styled.div`
display: flex;
flex-direction: row;
`;
const Pic1 = styled.div`
min-width: 98px;
min-height: 145px;
max-width: 98px;
max-height: 145px;
background-image: url(${Cactus1});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
margin: 1.5px;
`;
const Pic2 = styled.div`
min-width: 98px;
min-height: 145px;
max-width: 98px;
max-height: 145px;
background-image: url(${Pot1});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
margin: 1.5px;
`;
const Pic3 = styled.div`
min-width: 98px;
min-height: 145px;
max-width: 98px;
max-height: 145px;
background-image: url(${Cactus2});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
margin: 1.5px;
`;

const P_select = ({onCancel, onChoose1, onChoose2, onChoose3}) =>{
    return <Container>
        <X onClick={()=>{
            onCancel()
        }}/>
        <ChoosePhotos>
            <div>Choose a photo</div>
            <Photos>
                <Pic1 onClick={()=>{
                    onChoose1()
                }}/> 
                <Pic2 onClick={()=>{
                    onChoose2()
                }}/> 
                <Pic3 onClick={()=>{
                    onChoose3()
                }}/> 
            </Photos>
        </ChoosePhotos>
    </Container>
};

P_select.defaultProps = {
onCancel: ()=>{},
onChoose1: ()=>{},
onChoose2: ()=>{},
onChoose3: ()=>{},
};

export default P_select;