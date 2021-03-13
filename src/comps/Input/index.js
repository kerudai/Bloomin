import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const InputCont = styled.div`
max-width:290px;
min-height:90px;
max-height:90px;
margin-top:10px;
margin-bottom:20px;
`;

const InputText = styled.div`
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 30px;
color:${props=>props.color ? props.color : '#000000'};
margin-bottom:10px;
-webkit-user-select: none;
-ms-user-select: none;
user-select: none;
`;

const InputBox = styled.input`
background: #FFFFFF;
border: 3px solid #DADADA;
border-radius: 10px;
width:${props=>props.width ? props.width : '288px'};
min-height:52px;
max-height:52px;
font-weight: normal;
font-size: 18px;
line-height: 20px;
color: #727272;
text-indent: 10px;
outline: transparent;
`;

const Input = ({inputhead,placeholder, width, color}) => {
  return <InputCont>
    <InputText color={color}>
        {inputhead}
    </InputText>
    <InputBox placeholder={placeholder} width={width}/>
  </InputCont>
}

Input.defaultProps = {
    placeholder: "Default",
    inputhead: "Default"
}

export default Input;