import Button from 'comps/Button';
import Footer from 'comps/Footer';
import Header from 'comps/Header';
import Post from 'comps/Post';
import Tophead from 'comps/Tophead';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './posting.scss';
import axios from 'axios';

const Posting = () => {

  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const submit = async event => {
    event.preventDefault()
    const data = new FormData()
    data.append('image', file)
    data.append('description', description)
    const result = await axios.post('/photos', data)
    console.log(result)
  }
  
  return <div className="posting">
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
        
        {/* <Post />
        <div style={{marginTop:40,}}>
          <Button buttontext="POST"/>
        </div> */}

        <form onSubmit={submit}>
          <input
            filename={file} 
            onChange={e => setFile(e.target.files[0])} 
            type="file" 
            accept="image/*"
          ></input>
          <input
            onChange={e => setDescription(e.target.value)} 
            type="text"
            placeholder="Write a message..."
          ></input> 
          <button type="submit">Submit</button>
        </form>  

      </div>
    <Footer />
  </div>
}

export default Posting;