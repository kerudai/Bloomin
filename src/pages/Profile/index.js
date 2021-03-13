import Bio from 'comps/Bio';
import Footer from 'comps/Footer';
import Tophead from 'comps/Tophead';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Profile = () => {

  return <div>
    <Tophead />
    <Bio />
    <Footer />
  </div>
}

export default Profile;