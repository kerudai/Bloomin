import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import homeicon from '../../images/home.png';
import uploadicon from '../../images/upload.png';
import profileicon from '../../images/user1.png';

const FooterCont = styled.div`
min-width:100vw;
max-width: 100vw;
min-height:75px;
max-height:75px;
background: #97C2A8;
position: fixed;
bottom: 0;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top: 10px;

    .home {
        width: 28px;
        height: 28px;
        position:relative;
        right:100px;
        cursor: pointer;
    }

    .upload {
        width: 28px;
        height: 28px;
        cursor: pointer;
    }

    .profile {
        width: 35px;
        height: 35px;
        position:relative;
        left:100px;
        cursor: pointer;
    }

`;


const Footer = ({}) => {
  return <FooterCont>
  <Link to="/Feed" style={{ textDecoration: 'none'}}><img src={homeicon} className="home"/></Link>
  <Link to="/Posting" style={{ textDecoration: 'none'}}><img src={uploadicon} className="upload"/></Link>
  <Link to="/Profile" style={{ textDecoration: 'none'}}><img src={profileicon} className="profile"/></Link>
</FooterCont>
}

Footer.defaultProps = {

}

export default Footer;