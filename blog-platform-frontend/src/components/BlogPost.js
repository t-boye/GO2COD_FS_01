// src/components/BlogPost.js
import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"; // Updated import
import CommentForm from "./CommentForm"; // Ensure this path is correct
import CommentsList from "./CommentsList"; // Ensure this path is correct

const BlogPost = ({ post, onEdit, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {post.content} {/* Updated to display the content */}
        </Typography>
      </CardContent>
      <CardActions>
        <CommentForm postId={post.id} /> {/* Ensure postId matches your backend */}
        <Button size="small" color="primary" onClick={() => onEdit(post.id)}>
          Edit
        </Button>
        <Button size="small" color="secondary" onClick={() => onDelete(post.id)}>
          Delete
        </Button>
      </CardActions>
      <CommentsList postId={post.id} /> {/* Ensure CommentsList is defined */}
    </Card>
  );
};

export default BlogPost;