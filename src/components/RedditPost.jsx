import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services/reddit"; // Import the API function

function RedditPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts(); // Fetch data from Reddit API
        setPosts(data); // Store posts in state
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
      }
    };

    getPosts();
  }, []);

  if (error) {
    return <div className="error">{error}</div>; // Show error message
  }

  return (
    <div className="posts-container">
      {posts.length === 0 ? (
        <div>Loading...</div> // Show loading text until posts are fetched
      ) : (
        posts.map((post) => (
          <div key={post.data.id} className="post">
            <h3>{post.data.title}</h3>
            <p>{post.data.selftext}</p>
            <a
              href={`https://www.reddit.com${post.data.permalink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default RedditPosts;
