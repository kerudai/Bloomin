import Button from 'comps/Button';
import Footer from 'comps/Footer';
import Header from 'comps/Header';
import Post from 'comps/Post';
import Tophead from 'comps/Tophead';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Posting = () => {

  return <div>
    <Tophead/>
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
    }}>
      <div style={{
        marginBottom:30,
        marginTop:100
      }}><Header headtext="What's Bloomin'?"/></div>
      <Post />
      <div style={{
        marginTop:40,
      }}>
        <Button buttontext="POST"/>
      </div>
    </div>
    <Footer />
  </div>
}

export default Posting;