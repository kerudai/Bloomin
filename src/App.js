import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom"; 
import './App.scss';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Profile from 'pages/Profile';
import Posting from 'pages/Posting';
import Feed from 'pages/Feed';
import ProfileEdit from 'pages/ProfileEdit';
import Uploaded from 'pages/Uploaded';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Feed" component={Feed} />
          <Route path="/Profile" component={Profile} />
          <Route path="/ProfileEdit" component={ProfileEdit} />
          <Route path="/Posting" component={Posting} />
          <Route path="/Uploaded" component={Uploaded} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
