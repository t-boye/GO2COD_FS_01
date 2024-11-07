// src/components/BlogPosts.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogPosts } from '../redux/actions/blogActions';

const BlogPosts = () => {
  const dispatch = useDispatch();
  const { posts = [], loading, error } = useSelector(state => state.blogPosts || {});

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message || 'Something went wrong.'}</div>;
  }

  if (!posts.length) {
    return <div>No posts available.</div>;
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
