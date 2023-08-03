import './Main.scss'
import viewsLogo from '../../assets/Icons/views.svg';
import likesLogo from '../../assets/Icons/likes.svg';

const api_key = '?api_key=b500e183-5e41-4884-ad8e-f7190a88b1c8';


function Main ({selectedVideo}) {

    // function for current timestamp -------------------------------------------------------
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
      };

    return (
    <>
    <section className='main'>

        <div className="main__video">
            {/* <img className='main__video--img' src="https://i.imgur.com/l2Xfgpl.jpg" alt="" /> */}
            <video controls className='main__video--poster' src={`${selectedVideo.video}${api_key}`} poster={selectedVideo.image}></video>
        </div>

        <div className="main__container">

        <h2 className='main__title'>
          {selectedVideo.title}
          </h2>
        <div className='main__info'>
            <ul className='main__item'>
                <li className='main__item--channel'> {selectedVideo.channel}</li>
                <li className='main__item--timestamp'> {formatDate(selectedVideo.timestamp)}</li>
            </ul>
            <ul className="main__item">
                <li className='main__item--views'><img src={viewsLogo} alt="views" />{selectedVideo.views}</li>
                <li className='main__item--likes'><img src={likesLogo} alt="logo" />{selectedVideo.likes}</li>
            </ul>
        </div>
            <p className='main__description'>
            {selectedVideo.description}
            </p>

        </div>


    </section>
    </>
    )
}

export default Main
