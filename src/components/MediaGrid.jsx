// MediaGrid.js
import React, { useState , useCallback} from 'react';
import Modal from './Modal';
import PostDetail from './PostDetails/PostDetails';
import './MediaGrid.css';

const MediaGrid = ({ posts }) => {
    const [selectedPost, setSelectedPost] = useState(null);
  
    const handlePostClick = useCallback((post) => {
      setSelectedPost(post);
    }, []);
  
    const handleCloseModal = useCallback(() => {
      setSelectedPost(null);
    }, []);

  // Function to determine post size class
  const getPostSize = (index) => {
    // Create different patterns based on index
    const rand = Math.random();
    if (rand < 0.3) return 'post-large'; // 10% chance
    if (rand < 0.4) return 'post-medium'; // 15% chance
    if (rand < 0.5) return 'post-horizontal'; // 15% chance
    if (rand < 0.65) return 'post-vertical'; // 15% chance
    return 'post-small'; // 45% chance

    if (index % 18 === 0) return 'post-large'; // Extra large post
    if (index % 8 === 0) return 'post-horizontal'; // Horizontal rectangle
    if (index % 6 === 0) return 'post-vertical'; // Vertical rectangle
    if (index % 5 === 0) return 'post-medium'; // Medium square
    return 'post-small'; // Default small square
  };
  
    return (
      <>
        <div className="media-grid">
          {posts.map((post,index) => (
            <Post 
              key={index} 
              post={post} 
              sizeClass={getPostSize(index)}
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
const Post = ({ post,sizeClass, onClick }) => {
    const isLarge = Math.random() > 0.7;
  
    return (
      <div 
        className={`post-item ${sizeClass}`}
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