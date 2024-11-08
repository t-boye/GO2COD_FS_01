// src/components/BlogPosts.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogPosts, deleteBlogPost } from '../redux/actions/blogActions'; // Ensure deleteBlogPost is imported
import BlogPost from './BlogPost'; // Import the BlogPost component

const BlogPosts = () => {
  const dispatch = useDispatch();
  const { posts = [], loading, error } = useSelector(state => state.blogPosts || {});

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deleteBlogPost(id)); // Dispatch the delete action
    }
  };

  const handleEdit = (id) => {
    // Logic to handle editing a post
    console.log("Edit post with ID:", id);
    // You might want to show a modal or navigate to an edit page
  };

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
        <BlogPost 
          key={post.id} 
          post={post} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
};

export default BlogPosts;