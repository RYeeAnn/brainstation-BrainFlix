import '../App.scss';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Conversation from '../components/Conversation/Conversation';
import Comments from '../components/Comments/Comments';
import Videos from '../components/Videos/Videos';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

  // function clickHandler(videoId) {
  //   const video = videoDetails.find((video) => video.id === videoId);
  //   setSelectedVideo(video);
  // }


const api_key = '?api_key=b500e183-5e41-4884-ad8e-f7190a88b1c8';
const API_URL = process.env.REACT_APP_API_SERVER;
  console.log("HomePage API_URL", API_URL);


function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getVideos();
  }, [])

  useEffect(() => {
    if(id)
    getVideo(id);

  }, [id, videos]) // *dependencies (whenever id or videos change, it runs the use effect for getVideos)

  function getVideos() {
    axios
      .get(`${API_URL}/videos`)
      .then((response) => {


        // console.log(response.data[0]);
        setVideos(response.data);
        setLoading(false);

        // console.log('AXIOS VIDEOS', response.data)
        getVideo(response.data[0].id)



      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }

  function getVideo(id) {
    axios
      .get(`${API_URL}/videos/${id}`)
      .then((response) => {
        // console.log(response.data);
        setSelectedVideo(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }

   if (loading) {
    return <div> loading... </div>
   }
  return (
    <>
      <Header />
      <Main selectedVideo={selectedVideo} />
      <Conversation selectedVideo={selectedVideo} />
      <Comments selectedVideo={selectedVideo} />
      <Videos selectedVideo={selectedVideo} /*clickHandler={clickHandler}*/ />
    </>
  );
}

export default HomePage;