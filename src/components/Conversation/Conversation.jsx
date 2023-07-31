import './Conversation.scss'
import Image from '../../assets/Images/Mohan-muruge.jpg';

function Conversation () {
    return (
        <section className="conversation">
            <div className="conversation__comments">
                3 Comments
            </div>
            <div className="conversation__title">
                JOIN THE CONVERSATION
            </div>
            <div className="conversation__container-button">
            <div className="conversation__container">
                <img src={Image} alt="" className="conversation__image" />
                <textarea name="conversation" id="" cols="25" rows="5" placeholder='Add a new comment' className="conversation__text"required></textarea>
            </div>
                    <div className="conversation__button">
                        <button className="conversation__button--upload">
                        COMMENT
                        </button>
            </div>
                    </div>
        </section>
    )
}

export default Conversation
