import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions/communityActions';

function Post({ post }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim()) {
      dispatch(addComment(post.id, comment));
      setComment('');
    }
  };

  return (
    <div className="post">
      <p>{post.content}</p>
      <div className="comments">
        {post.comments.map((comment, index) => (
          <div key={index} className="comment">{comment}</div>
        ))}
      </div>
      <div className="new-comment">
        <input 
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Comment</button>
      </div>
    </div>
  );
}

export default Post;
