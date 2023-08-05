import React, { useState, useEffect } from 'react';
import './Videos.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const api_key = '?api_key=b500e183-5e41-4884-ad8e-f7190a88b1c8';

function Video({ id, title, channel, image }) {

  return (
    <Link to={`/videos/${id}`}>
      <div className="videos__row">
        <img src={image} alt="thumbnail" className="videos__image" />
        <div className="videos__info">
          <div className="videos__title">{title}</div>
          <div className="videos__channel">{channel}</div>
        </div>
      </div>
    </Link>
  );
}

function Videos({ selectedVideo }) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    getVideoData();
  }, [selectedVideo]);
  

  function getVideoData() {
    axios
    .get(`https://project-2-api.herokuapp.com/videos/${api_key}`)
    .then((response) => {
      setVideoList(response.data);
    })
    .catch((error) => {
      console.error('Error fetching video data:', error);
    });
  }

  return (
    <section className="videos">
      <div className="videos__container">
        <div className="videos__header">NEXT VIDEOS</div>
        <div className="videos__card">
          {videoList
            .filter((video) => selectedVideo.id !== video.id)
            .map((video) => (
              <Video
                key={video.id}
                id={video.id}
                title={video.title}
                channel={video.channel}
                image={video.image}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;

  

  






























