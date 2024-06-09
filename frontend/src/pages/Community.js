import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, createPost } from '../redux/actions/communityActions';
import Post from '../components/Post';

function Community() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.community.posts);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleCreatePost = () => {
    if (newPost.trim()) {
      dispatch(createPost(newPost));
      setNewPost('');
    }
  };

  return (
    <div className="community-container">
      <h2>Community</h2>
      <div className="new-post">
        <textarea 
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write your post here..."
        />
        <button onClick={handleCreatePost}>Post</button>
      </div>
      <div className="posts">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Community;
