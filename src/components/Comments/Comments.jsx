import './Comments.scss';
import React, { useState, useEffect } from 'react';
import videoDetails from '../../assets/Data/video-details.json';

function Comments({ selectedVideo }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(updateDate, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const updateDate = () => {
    setCurrentDate(new Date());
  };

  const formatDate = (timestamp) => {
    try {
      const commentDate = new Date(timestamp);
      const timeDifference = currentDate - commentDate;
  
      if (timeDifference < 1000 * 60) {
        return 'Just now';
      } else if (timeDifference < 1000 * 60 * 60) {
        return `${Math.floor(timeDifference / (1000 * 60))} minutes ago`;
      } else if (timeDifference < 1000 * 60 * 60 * 24) {
        return `${Math.floor(timeDifference / (1000 * 60 * 60))} hours ago`;
      } else {
        return commentDate.toLocaleDateString(); // Use toLocaleDateString instead of toLocaleString
      }
    } catch (error) {
      console.error('Error parsing the comment timestamp:', error);
      return 'Invalid Date';
    }
  };

  return (
    <section className="comments">
      <div className="comments__container">
        {selectedVideo.comments.map((comment) => (
          <div key={comment.id} className="comments__row">
            <div className="comments__image" />
            <div className="comments__items">
              <div className="comments__namedate">
                <div className="comments__name">{comment.name}</div>
                <div className="comments__date">{formatDate(comment.timestamp)}</div>
              </div>
              <div className="comments__text">{comment.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Comments;



















// import './Comments.scss';
// import React from 'react';
// import videoDetails from '../../assets/Data/video-details.json';

// function Comments({ selectedVideo }) {
//     return (
//       <section className="comments">
//         <div className="comments__container">
//           {selectedVideo.comments.map((comment) => (
//             <div key={comment.id} className="comments__row">
//               <div className="comments__image"/>
//             <div className="comments__items">
//                 <div className="comments__namedate">
//                     <div className="comments__name">{comment.name}</div>
//                     <div className="comments__date">{comment.timestamp}</div>
//                 </div>
//               <div className="comments__text">{comment.comment}</div>
//             </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  
  
//   export default Comments;