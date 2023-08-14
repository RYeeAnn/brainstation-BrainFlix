import '../App.scss';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Conversation from '../components/Conversation/Conversation';
import Comments from '../components/Comments/Comments';
import Videos from '../components/Videos/Videos';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_SERVER;

function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getVideos();
  }, [])

  useEffect(() => {
    if (id) {
      getVideo(id);
    }
  }, [id, videos]);

  function getVideos() {
    axios.get(`${API_URL}/videos`)
      .then((response) => {
        setVideos(response.data);
        setLoading(false);
        if (response.data.length > 0) {
          getVideo(response.data[0].id);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }

  function getVideo(id) {
    axios.get(`${API_URL}/videos/${id}`)
      .then((response) => {
        setSelectedVideo(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }

  function handleCommentAdded(comment) {
    setSelectedVideo((prevSelectedVideo) => ({
      ...prevSelectedVideo,
      comments: [comment, ...prevSelectedVideo.comments],
    }));
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header />
      <Main selectedVideo={selectedVideo} />
      <Conversation selectedVideo={selectedVideo} />
      <Comments selectedVideo={selectedVideo} handleCommentAdded={handleCommentAdded}/>
      <Videos selectedVideo={selectedVideo} />
    </>
  );
}

export default HomePage;
