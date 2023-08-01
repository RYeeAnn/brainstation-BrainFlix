import '..//App.scss';
import Header from '../components/Header/Header';
import Upload from '../components/Upload/Upload';
import videoDetails from '../assets/Data/video-details.json';
import Main from '../components/Main/Main';
import Conversation from '../components/Conversation/Conversation';
import Comments from '../components/Comments/Comments';
import Videos from '../components/Videos/Videos';
import { useState } from 'react';

function VideoUploadPage() {

    

    return (
        <>
        <Header />
        <Upload />
        </>
    )
}

export default VideoUploadPage