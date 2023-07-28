import React from 'react';
import './Videos.scss';
import videoDetails from '../../assets/Data/video-details.json';

function Video({ title, channel, image,}) {

    function clickHandler() {
        console.log('click')
    }

  return (
    <div className="videos__row" onClick={clickHandler}>
      <img src={image} alt="thumbnail" className="videos__image" />
      <div className="videos__info">
        <div className="videos__title">{title}</div>
        <div className="videos__channel">{channel}</div>
      </div>
    </div>
  );
}

function Videos() {
  return (
    <section className="videos">
      <div className="videos__container">
        <div className="videos__header">NEXT VIDEOS</div>
        <div className="videos__card"> {
            
            videoDetails.map(video => (
            <Video
              key={video.id}
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