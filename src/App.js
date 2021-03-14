import './App.scss';
import Post from '../src/comps/Post';
import FeedPost from '../src/comps/FeedPost';
import Login from 'pages/Login';


function App() {
  return (
    <div className="App">

     

      {/* Kaye's Comps */}
      <Post />
      <FeedPost />
      
      {/* <Login /> */}

    </div>
  );
}

export default App;
