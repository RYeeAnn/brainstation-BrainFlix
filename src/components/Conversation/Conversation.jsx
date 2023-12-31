import React, { useState } from 'react';
import './Conversation.scss';
import Image from '../../assets/Images/Mohan-muruge.jpg';
import axios from 'axios'; 
import { v4 as uuid } from 'uuid';

const API_URL = process.env.REACT_APP_API_SERVER;
function Conversation({ selectedVideo }) {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault(); // Prevents refreshing
    const newCommentObject = {
      id: uuid(),
      name: "User",
      text: newComment,
      likes: "0",
      timestamp: Date.now(),
    };

    // Update state with the new comment
    selectedVideo.comments.unshift(newCommentObject);
    setNewComment('');

    // Send the new comment to the backend
    axios.post(`${API_URL}/comments`, { comment: newCommentObject.text })
      .then((response) => {
        console.log('Comment posted successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error posting comment:', error);
      });
  };



  

  return (
    <section className="conversation">
      <div className="conversation__comments">
        {selectedVideo.comments?.length} Comment
        {selectedVideo.comments?.length !== 1 ? 's' : ''}
      </div>
      <div className="conversation__title">JOIN THE CONVERSATION</div>
      <form onSubmit={handleCommentSubmit}>
        <div className="conversation__container-button">
          <div className="conversation__container">
            <img src={Image} alt="" className="conversation__image" />
            <textarea
              name="conversation"
              id=""
              cols="25"
              rows="5"
              placeholder="Add a new comment"
              className="conversation__text"
              required
              value={newComment}
              onChange={handleCommentChange}
            />
          </div>
          <div className="conversation__button">
            <button className="conversation__button--upload" type="submit">
              COMMENT
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Conversation;
