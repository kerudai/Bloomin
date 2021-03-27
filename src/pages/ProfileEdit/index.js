import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import EditAvatar from 'comps/EditAvatar';
import Input from 'comps/Input';
import Button from 'comps/Button';
import Spacer from 'comps/Spacer';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F5F5F5;
  min-height: 100vh;
  max-height: auto;
  min-width: 100vw;
  max-width: 100vw;
  padding-bottom: 120px;
`;

const Name = styled.div`
  width: 295px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Text = styled.div`
  width: 90%;
  cursor: pointer;
  text-align: right;
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 90px;

  &:hover {
    color: #6d8a6d;
  }
`;

const ProfileEdit = () => {

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] =  useState("");
  const [pass, setPass] =  useState("");
  const [username, setUsername] =  useState("");
  const [favoriteplant, setFavoritePlant] =  useState("");
  const [description, setDescription] = useState("");
  
  const HandleFormComplete = async(first,last,email,pass,username,favoriteplant) =>{
    var resp = await axios.post("https://bloominuserdb.herokuapp.com/api/comments")
    console.log("post new user", resp);
  }
  

  return <Container>
    <Tophead/>
    <Spacer/>
    <Link to="/" style={{ textDecoration: 'none', color: '#000000', position: 'relative', right: '-110px'}}><Text>Logout</Text></Link>
    <EditAvatar/>
    <Name>
      <Input inputhead="First Name" placeholder="First Name" width="130px" onChange={(e) => {
        setFirst(e.target.value); }} value={first}/>

      <Input inputhead="Last Name" placeholder="Last Name" width="130px" Change={(e) => {
        setLast(e.target.value); }} value={last}/>
    </Name>
    <Input inputhead="Description" placeholder="Description" onChange={(e) => {
        setDescription(e.target.value); }} value={description}/>

    <Input inputhead="Favorite Plant" placeholder="Favorite Plant" onChange={(e) => {
        setFavoritePlant(e.target.value); }} value={favoriteplant}/>

    <Input inputhead="Password" placeholder="Password"  onChange={(e) => {
        setPass(e.target.value); }} value={pass}/>

    <Input inputhead="Email" placeholder="Email" onChange={(e) => {
        setEmail(e.target.value); }} value={email}/>

    <Input inputhead="Username" placeholder="Username" onChange={(e) => {
        setUsername(e.target.value); }} value={username}/>

    <Link to="/Profile" style={{ textDecoration: 'none'}}><Button buttontext="Save changes" onClick={()=>{
        HandleFormComplete(first, last, email, pass, username, description, favoriteplant) } }/></Link>
    <Spacer/>
    <Footer/>
  </Container>
}

export default ProfileEdit;