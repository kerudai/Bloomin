import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../images/headerlogo.png';
import backicon from '../../images/back.png';
import setting from '../../images/setting.png';

const TopHeadCont = styled.div`
min-width:414px;
max-width:414px;
min-height:75px;
max-height:75px;
background: #97C2A8;
position: relative;
z-index: 1;
top: 0;
left: 0;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;

    .headerlogo{
        width:46px;
        height:46px;
    }

    .back{
        width: 30px;
        height: 30px;
        position:relative;
        right:120px;
        cursor: pointer;
    }

    .setting{
        width: 30px;
        height: 30px;
        position:relative;
        left:120px;
        cursor: pointer;
    }

`;

const Tophead = ({ }) => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return <TopHeadCont>
        <img src={backicon} className="back" onClick={goBack} />
        <img src={logo} className="headerlogo" />
        <Link to="/ProfileEdit" style={{ textDecoration: 'none'}}><img src={setting} className="setting" /></Link>
    </TopHeadCont>
}

Tophead.defaultProps = {

}

export default Tophead;