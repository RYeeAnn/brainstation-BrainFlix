import './App.scss';
import Header from './components/Header/Header';
import videos from './assets/Data/videos.json';
import videoDetails from './assets/Data/video-details.json';
import Main from './components/Main/Main';
import Conversation from './components/Conversation/Conversation';
import Comments from './components/Comments/Comments';

console.log(videos)
console.log(videoDetails)


function App () {
  return (
    <>
    <Header/>
    <Main/>
    <Conversation/>
    <Comments/>
    </>

  )
}

export default App;