import './Comments.scss';
import videoDetails from '../../assets/Data/video-details.json';
import Image from '../../assets/Images/Mohan-muruge.jpg';

const selectedComment = videoDetails[0]

function Comments () {
    return (
        <section className="comments">
            <div className="comments__row">
                <img src={Image} alt="" className="comments__image" />
                <div className="comments__name"> {selectedComment.name}</div>
            </div>
        </section>
    )
}

export default Comments