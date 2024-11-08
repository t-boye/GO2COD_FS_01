// src/components/BlogPage.js
import React from "react";
import { useSelector } from "react-redux";
import { Typography, Paper } from "@mui/material";
import BlogPostsForm from "./BlogPostsForm";

const BlogPage = () => {
  const posts = useSelector((state) => state.blogPosts); // Assuming your reducer is named blogPosts

  return (
    <div>
      <BlogPostsForm />
      <Typography variant="h4" style={{ margin: '20px 0' }}>Blog Posts</Typography>
      {posts.length === 0 ? (
        <Typography variant="h6">No blog posts available.</Typography>
      ) : (
        posts.map((post, index) => (
          <Paper key={index} style={{ padding: '16px', marginBottom: '16px' }}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body1">{post.description}</Typography>
            <Typography variant="caption">Tags: {post.tags.join(", ")}</Typography>
            {post.fileUpload && <img src={post.fileUpload} alt="Uploaded" style={{ maxWidth: '100%' }} />}
          </Paper>
        ))
      )}
    </div>
  );
};

export default BlogPage;