import './App.scss';
import Header from './components/Header/Header';
import videos from './assets/Data/videos.json';
import videoDetails from './assets/Data/video-details.json';
import Main from './components/Main/Main';
import Conversation from './components/Conversation/Conversation';
import Comments from './components/Comments/Comments';
import Videos from './components/Videos/Videos';

// console.log(videos)
// console.log(videoDetails)


function App () {
  return (
    <>
    <Header/>
    <Main/>
    <Conversation/>
    <Comments/>
    <Videos/>
    </>

  )
}

export default App;