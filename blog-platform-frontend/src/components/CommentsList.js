// components/CommentsList.js
import React from "react";
import { Paper, Typography } from "@mui/material";

const CommentsList = ({ comments }) => {
  return (
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h6">Comments</Typography>
      {comments.length === 0 ? (
        <Typography variant="body2">No comments yet.</Typography>
      ) : (
        comments.map((comment, index) => (
          <div key={index} style={{ marginBottom: '12px' }}>
            <Typography variant="body1"><strong>{comment.name}</strong></Typography>
            <Typography variant="body2">{comment.comment}</Typography>
          </div>
        ))
      )}
    </Paper>
  );
};

export default CommentsList;