// src/components/BlogPostsForm.js
import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material"; // Updated import
import { useDispatch } from "react-redux";
import { addBlogPost } from "../actions/blogPosts";

const BlogPostsForm = () => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    tags: "",
    fileUpload: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = postData.tags.split(",").map(tag => tag.trim());
    dispatch(addBlogPost({ ...postData, tags: tagsArray }));
    clear();
  };

  const clear = () => {
    setPostData({ title: "", description: "", tags: "", fileUpload: "" });
  };

  return (
    <Paper style={{ padding: '16px' }}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Create a Blog Post</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={postData.description}
          onChange={(e) => setPostData({ ...postData, description: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (comma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <TextField
          name="fileUpload"
          variant="outlined"
          label="File Upload (URL)"
          fullWidth
          value={postData.fileUpload}
          onChange={(e) => setPostData({ ...postData, fileUpload: e.target.value })}
        />
        <Button
          style={{ marginTop: '16px' }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default BlogPostsForm;