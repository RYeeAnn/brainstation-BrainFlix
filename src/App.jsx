import './App.scss';
import Header from './components/Header/Header';
import videoDetails from './assets/Data/video-details.json';
import Main from './components/Main/Main';
import Conversation from './components/Conversation/Conversation';
import Comments from './components/Comments/Comments';
import Videos from './components/Videos/Videos';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoUploadPage from './pages/VideoUploadPage';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload" element={<VideoUploadPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;




























