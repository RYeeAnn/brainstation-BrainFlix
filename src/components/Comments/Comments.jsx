import './Comments.scss';
import videoDetails from '../../assets/Data/video-details.json';
import Image from '../../assets/Images/Mohan-muruge.jpg';

const selectedComment = videoDetails[0]

function Comments () {
    return (
        <section className="comments">

            <div className="comments__container">
                <div className="comments__row comments__row--first">
                    <div className="comments__image" />
                    <div className="comments__name"> {selectedComment.comments[0].name}</div>
                    <div className="comments__date"> {selectedComment.comments[0].timestamp}</div>
                </div>
                <div className="comments__text"> {selectedComment.comments[0].comment}</div>

                <div className="comments__row">
                    <div className="comments__image" />
                    <div className="comments__name"> {selectedComment.comments[1].name}</div>
                    <div className="comments__date"> {selectedComment.comments[1].timestamp}</div>
                </div>
                <div className="comments__text">{selectedComment.comments[1].comment}</div>

                <div className="comments__row">
                    <div className="comments__image" />
                    <div className="comments__name"> {selectedComment.comments[2].name}</div>
                    <div className="comments__date"> {selectedComment.comments[2].timestamp}</div>
                </div>
                <div className="comments__text">{selectedComment.comments[2].comment}</div>
            </div>

        </section>
    )
}

export default Comments