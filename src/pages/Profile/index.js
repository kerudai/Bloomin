import Bio from 'comps/Bio';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import Avatar from 'comps/Avatar';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FeedPost from 'comps/FeedPost';
import Spacer from 'comps/Spacer';
import axios from 'axios';

const Container = styled.div`
padding-bottom: 105px;
background-color: #F5F5F5;
min-height: 100vh;
max-height: 100vh;
min-width: 100vw;
max-width: 100vw;
`;

const UserBio = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 10px;
margin-bottom: 20px;
`;

const Profile = () => {

const [users, setUsers] = useState([])
const GetUsers = async () => {
  
 var resp = await axios.get("https://bloominuserdb.herokuapp.com/api/users");
 console.log("get users", resp);
 setUsers(resp.data.users);

}

useEffect(()=>{
  GetUsers();
}, []);


  return <Container>
    <Tophead />
    <Spacer/>
    <div className="profile">
    <UserBio>
      <Avatar/>
      <Bio userinfo={users}/>
    </UserBio>
    <FeedPost />
    <FeedPost />
    </div>
    <Footer />
  </Container>
}

export default Profile;