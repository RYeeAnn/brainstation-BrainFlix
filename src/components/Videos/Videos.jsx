import React from 'react';
import { useState } from 'react';
import './Videos.scss';
import videoDetails from '../../assets/Data/video-details.json';







function Video({ id, title, channel, image, clickHandler }) {
    return (
      <div className="videos__row" onClick={() => clickHandler(id)}>
        <img src={image} alt="thumbnail" className="videos__image" />
        <div className="videos__info">
          <div className="videos__title">{title}</div>
          <div className="videos__channel">{channel}</div>
        </div>
      </div>
    );
  }


  
  function Videos({selectedVideo, clickHandler}) {
  
    return (
      <section className="videos">
        <div className="videos__container">
          <div className="videos__header">NEXT VIDEOS</div>
          <div className="videos__card">
            {videoDetails.filter(video => selectedVideo.id !== video.id).map((video) => 
              <Video
                key={video.id}
                id={video.id}
                title={video.title}
                channel={video.channel}
                image={video.image}
                clickHandler={clickHandler}
              />
            )}
          </div>
        </div>
      </section>
    );
  }
  
  export default Videos;
  

  






























