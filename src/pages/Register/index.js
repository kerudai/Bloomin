import Button from 'comps/Button';
import Header from 'comps/Header';
import React, { useState, useEffect } from 'react';
import Input from '../../comps/Input';
import backIcon from 'images/back.png';
import './register.scss';

const Register = () => {

  return <div className="registerCont">
    <img src={backIcon} style={{
      width:30,
      height:30,
      position:"relative",
      marginTop:30,
      marginLeft:-10,
      cursor: "pointer"
    }}/>
    <div className="InputCont" style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}>
      <div className="RegisterHeadText" style={{
        marginBottom:20,
        marginTop:-20
      }}>
        <Header headtext="Register"/>
      </div>

      <Input inputhead="First Name" placeholder="First Name"/>
      <Input inputhead="Last Name" placeholder="Last Name"/>
      <Input inputhead="Email" placeholder="Email"/>
      <Input inputhead="Password" placeholder="Password"/>
      <Input inputhead="Username" placeholder="Username"/>

      <div className="birthday" style={{
        display:"flex",
        alignContent:"baseline",
        marginBottom:20,
        marginLeft:10
      }}>

        <div className="birthdayInput"><Input inputhead="Birthday" placeholder="MM" width="60px"/><div className="birthdayText">MM</div></div>

        <div className="birthdayInput"><Input color="#F5F5F5" placeholder="DD" width="60px"/><div className="birthdayText">DD</div></div>

        <div className="birthdayInput"><Input color="#F5F5F5" placeholder="YYYY" width="110px"/><div className="birthdayText">YYYY</div></div>
        
      </div>
      <Input inputhead="What's Your Favorite Plant?" placeholder="Favorite plant"/>
      <Button buttontext="CREATE ACCOUNT"/>
    </div>
  </div>
}

export default Register;