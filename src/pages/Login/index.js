import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Button from 'comps/Button';
import Input from 'comps/Input';
import Logo from 'comps/Logo';

const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
`;

const Text = styled.div`
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #6d8a6d;
  }
`;

const Login = () => {

  const history = useHistory();

  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [error, setError] = useState(null);

  // const Auth = async () =>{
  //   var resp2 = await axios.get("https://bloominuserdb.herokuapp.com/login");
  // }

  const HandleLogin = async ({headers, token}) => {
    var resp = await axios.post("https://bloominuserdb.herokuapp.com/login", { Email:Email, Pass:Pass });
    console.log(resp);
    if (resp.data !== "Error: incorrect credentials.") {
      sessionStorage.setItem("token", token);
      axios.defaults.headers.common['Authorization'] = token;
      const headers = { "Authorization" : `Bearer ${token}` };
      history.push("/Feed");
    } else {
      setError("Error: incorrect credentials.")
    }
  }

  return <Container>
    <Logo />
    <Input type="email" inputhead="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    <Input type="password" inputhead="Password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
    <Link to="/Feed" style={{ textDecoration: 'none', color: '#000000' }} ><Button buttontext="Log in" /></Link>
    <Link to="/Register" style={{ textDecoration: 'none', color: '#000000' }} ><Text>Create Account</Text></Link>
  </Container>
}

export default Login;