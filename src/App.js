import './App.scss';

import Main from 'pages/main';
import Post from '../src/comps/Post';
import Login from 'pages/Login';


function App() {
  return (
    <div className="App">

      <Main />

      {/* Kaye's Comps */}
      <Post />
    
      <Login />

    </div>
  );
}

export default App;
