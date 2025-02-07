// MediaGrid.js
import React, { useState , useCallback,useMemo } from 'react';
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

    // Generate stable sizes for posts using useMemo
    const postSizes = useMemo(() => {
        return posts.map((post, index) => {
            // Use a stable seed based on post id or index
            // const seed = post.id || index;
            const rand = Math.random()

            if (rand < 0.3) return 'post-large';
            if (rand < 0.4) return 'post-medium';
            if (rand < 0.5) return 'post-horizontal';
            if (rand < 0.65) return 'post-vertical';
            return 'post-small';
        });
    }, [posts]); // Only recalculate if posts array changes

    return (
        <>
            <div className="media-grid">
                {posts.map((post, index) => (
                    <Post 
                        key={index}
                        post={post}
                        sizeClass={postSizes[index]}
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

// Utility function for stable random number generation
const seededRandom = (seed) => {
    const x = Math.sin(seed * 9999) * 10000;
    return x - Math.floor(x);
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