// MediaGrid.js
import React, { useState } from 'react';
import Modal from './Modal';
import PostDetail from './PostDetails/PostDetails';
import './MediaGrid.css';

const MediaGrid = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <div className="media-grid">
        {posts.map((post) => (
          <Post 
            key={post.id} 
            post={post} 
            onClick={handlePostClick}
          />
        ))}
      </div>

      <Modal 
        isOpen={selectedPost !== null}
        onClose={handleCloseModal}
      >
        {selectedPost && <PostDetail post={selectedPost} />}
      </Modal>
    </>
  );
};

// Post.js
const Post = ({ post, onClick }) => {
    const isLarge = Math.random() > 0.7;
  
    return (
      <div 
        className={`post-item ${isLarge ? 'large' : ''}`} 
        onClick={() => onClick(post)}
      >
        <div className="post-content">
          <img src={post.imageUrl} alt={post.title} />
          <div className="overlay">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
    );
  };

  
export default MediaGrid;