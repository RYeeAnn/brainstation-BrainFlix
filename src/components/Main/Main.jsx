import './Main.scss'
import videoDetails from '../../assets/Data/video-details.json';
import viewsLogo from '../../assets/Icons/views.svg';
import likesLogo from '../../assets/Icons/likes.svg';

const selectedVideo = videoDetails[0]

function Main () {
    return (
    <>
    <section className='main'>

        <div className="main__video">
            {/* <img className='main__video--img' src="https://i.imgur.com/l2Xfgpl.jpg" alt="" /> */}
            <video controls className='main__video--poster' src={selectedVideo.video} poster={selectedVideo.image}></video>
        </div>

        <h2 className='main__title'>
          {selectedVideo.title}
          </h2>
        <div className='main__info'>
            <ul className='main__item'>
                <li className='main__item--channel'> {selectedVideo.channel}</li>
                <li className='main__item--timestamp'> {selectedVideo.timestamp}</li>
            </ul>
            <ul className="main__item">
                <li className='main__item--views'><img src={viewsLogo} alt="views" />{selectedVideo.views}</li>
                <li className='main__item--likes'><img src={likesLogo} alt="logo" />{selectedVideo.likes}</li>
            </ul>
        </div>
            <p className='main__description'>
            {selectedVideo.description}
            </p>
    </section>
    </>
    )
}

export default Main
