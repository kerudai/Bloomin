import Button from 'comps/Button';
import Header from 'comps/Header';
import React, { useState, useEffect } from 'react';
import Input from '../../comps/Input';
import backIcon from 'images/back.png';
import './register.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Register = () => {

const [first, setFirst] = useState("");
const [last, setLast] = useState("");
const [email, setEmail] =  useState("");
const [pass, setPass] =  useState("");
const [username, setUsername] =  useState("");
const [birthday, setBirthday] =  useState("");
const [favoriteplant, setFavoritePlant] =  useState("");

const HandleFormComplete = async(first,last,email,pass,username,birthday,favoriteplant) =>{
  var resp = await axios.post("https://bloominuserdb.herokuapp.com/api/comments")
  console.log("post new user", resp);
}


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

      <Input inputhead="First Name" placeholder="First Name" onChange={(e) => {
        setFirst(e.target.value); }} value={first}/>

      <Input inputhead="Last Name" placeholder="Last Name" onChange={(e) => {
        setLast(e.target.value); }} value={last}/>

      <Input inputhead="Email" placeholder="Email" onChange={(e) => {
        setEmail(e.target.value); }} value={email}/>

      <Input inputhead="Password" placeholder="Password" onChange={(e) => {
        setPass(e.target.value); }} value={pass}/>

      <Input inputhead="Username" placeholder="Username" onChange={(e) => {
        setUsername(e.target.value); }} value={username}/>

      <Input inputhead="Birthday" placeholder="YYYY-MM-DD" onChange={(e) => {
        setBirthday(e.target.value); }} value={birthday}/>
      
        
      <Input inputhead="What's Your Favorite Plant?" placeholder="Favorite plant" onChange={(e) => {
        setFavoritePlant(e.target.value); }} value={favoriteplant}/>
      
      <Link to="/Feed" style={{ textDecoration: 'none'}}><Button buttontext="CREATE ACCOUNT" onClick={()=>{
        HandleFormComplete(first, last, email, pass, username, birthday, favoriteplant) } }/></Link>

    </div>
  </div>
}

export default Register;