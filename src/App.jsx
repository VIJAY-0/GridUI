// App.js
import React from 'react';
import MediaGrid from './components/MediaGrid';


const App = () => {
  var img_api  = "https://picsum.photos/200"

  var img_api_url  = "https://picsum.photos/200/300"

  // Example post data structure
const posts = [

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },
  {
    id: 1,
    title: "Beautiful Sunset",
    description: "Captured this amazing sunset at the beach",
    imageUrl: img_api, // Thumbnail for grid
    images: [
      img_api_url,
      img_api_url,
      img_api_url,
      img_api_url,
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
  },

  // ... more posts
];

  return (
    <div className="app">
      <MediaGrid posts={posts} />
    </div>
  );
};

export default App;