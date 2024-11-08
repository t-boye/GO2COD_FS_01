import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBlogPosts } from '../actions/blogPosts'; // Import the action to fetch blog posts
import BlogPostsList from '../components/BlogPostsList'; // Import the BlogPostsList component

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blogPosts.posts); // Access the posts from the Redux store

  // Fetch all blog posts when the component mounts
  useEffect(() => {
    dispatch(fetchAllBlogPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to the Blog Platform</h1>
      <p>This is the home page.</p>
      <BlogPostsList posts={posts} /> {/* Render the BlogPostsList component */}
    </div>
  );
};

export default Home;