// src/components/CommentForm.js
import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material"; // Updated import
import { useDispatch } from "react-redux";
import { addComment } from "../actions/comments";

const CommentForm = ({ postId }) => {
  const [commentData, setCommentData] = useState({ name: "", comment: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment(postId, commentData)); // Dispatch the action to add the comment
    setCommentData({ name: "", comment: "" }); // Clear the form
  };

  return (
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Leave a Comment</Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Your Name"
          fullWidth
          value={commentData.name}
          onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
        />
        <TextField
          name="comment"
          variant="outlined"
          label="Comment"
          fullWidth
          multiline
          rows={4}
          value={commentData.comment}
          onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
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

export default CommentForm;