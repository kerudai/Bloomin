import Button from 'comps/Button';
import Header from 'comps/Header';
import React, { useState, useEffect } from 'react';
import Input from '../../comps/Input';
import backIcon from 'images/back.png';
import './register.scss';
import {Link} from 'react-router-dom';

const Register = () => {

  

  return <div className="registerCont">
    <Link to="/" style={{ textDecoration: 'none'}}><img src={backIcon} style={{
      width:30,
      height:30,
      position:"fixed",
      marginTop:30,
      marginLeft:20,
      cursor: "pointer",
    }}/></Link>
    <div className="InputCont" style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}>
      <div className="RegisterHeadText" style={{
        marginBottom:20,
        marginTop:10
      }}>
        <Header headtext="Register"/>
      </div>

      <Input inputhead="First Name" placeholder="First Name"/>
      <Input inputhead="Last Name" placeholder="Last Name"/>
      <Input inputhead="Email" placeholder="Email"/>
      <Input inputhead="Password" placeholder="Password"/>
      <Input inputhead="Username" placeholder="Username"/>
      <Input inputhead="Birthday" placeholder="YYYY-MM-DD"/>
      
        
      <Input inputhead="What's Your Favorite Plant?" placeholder="Favorite plant"/>
      <Link to="/Feed" style={{ textDecoration: 'none'}}><Button buttontext="CREATE ACCOUNT"/></Link>
    </div>
  </div>
}

export default Register;