import './App.scss';
import Header from './components/Header/Header';
import videos from './assets/Data/videos.json';
import videoDetails from './assets/Data/video-details.json';
import Main from './components/Main/Main';
import Conversation from './components/Conversation/Conversation';
import Comments from './components/Comments/Comments';
import Videos from './components/Videos/Videos';
import { useState } from 'react';


function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  function clickHandler(videoId) {
    const video = videoDetails.find((video) => video.id === videoId);
    setSelectedVideo(video);
  }

  return (
    <>
      <Header />
      <Main selectedVideo={selectedVideo} />
      <Conversation />
      <Comments selectedVideo={selectedVideo} />
      <Videos selectedVideo={selectedVideo} clickHandler={clickHandler} />
    </>
  );
}

export default App;




























