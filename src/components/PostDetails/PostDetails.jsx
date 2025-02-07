// PostDetail.js
import React, { useState } from 'react';
import './PostDetails.css';

const PostDetail = ({ post }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample post data structure
  const samplePost = {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg"
    ],
    remarks: [
      { id: 1, user: "John", comment: "Stunning view!" },
      { id: 2, user: "Sarah", comment: "Love the colors!" }
    ],
    reactions: {
      like: 42,
      love: 23,
      wow: 15
    },
    author: "Mike Smith",
    timestamp: "2023-07-20T15:30:00"
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === post.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? post.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="post-detail-container">
      <div className="post-header">
        <h2>{post.title}</h2>
        <div className="post-meta">
          <span>Posted by {post.author}</span>
          <span>{new Date(post.timestamp).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="image-gallery">
        <button className="nav-button prev" onClick={prevImage}>❮</button>
        <div className="image-container">
          <img 
            src={post.images[currentImageIndex]} 
            alt={`${post.title} - ${currentImageIndex + 1}`} 
          />
          <div className="image-counter">
            {currentImageIndex + 1} / {post.images.length}
          </div>
        </div>
        <button className="nav-button next" onClick={nextImage}>❯</button>
        
        <div className="thumbnail-strip">
          {post.images.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={`thumbnail ${index + 1}`}
              className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="post-content">
        <p>{post.description}</p>
      </div>

      <div className="reactions-section">
        <h3>Reactions</h3>
        <div className="reaction-buttons">
          <button className="reaction-btn">
            👍 Like ({post.reactions.like})
          </button>
          <button className="reaction-btn">
            ❤️ Love ({post.reactions.love})
          </button>
          <button className="reaction-btn">
            😮 Wow ({post.reactions.wow})
          </button>
        </div>
      </div>

      <div className="remarks-section">
        <h3>Remarks</h3>
        <div className="remarks-list">
          {post.remarks.map(remark => (
            <div key={remark.id} className="remark">
              <strong>{remark.user}</strong>
              <p>{remark.comment}</p>
            </div>
          ))}
        </div>
        <div className="add-remark">
          <textarea placeholder="Add a remark..." />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;