// src/components/BlogPostsList.js
import React from 'react';
import { useSelector } from 'react-redux';
import BlogPost from './BlogPost';
import { Paper, Typography } from '@mui/material';

const BlogPostsList = () => {
  const { posts = [], loading, error } = useSelector(state => state.blogPosts || {});

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || 'Something went wrong.'}</div>;
  if (!posts.length) return <div>No posts available.</div>;

  return (
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h6">Blog Posts</Typography>
      {posts.map(post => (
        <BlogPost key={post._id} post={post} />
      ))}
    </Paper>
  );
};

export default BlogPostsList;