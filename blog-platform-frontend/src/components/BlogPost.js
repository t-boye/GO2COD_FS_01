// src/components/BlogPost.js
import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"; // Updated import
import CommentForm from "./CommentForm"; // Ensure this path is correct
import CommentsList from "./CommentsList"; // Ensure this path is correct

const BlogPost = ({ post }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions>
        <CommentForm postId={post._id} />
      </CardActions>
      <CommentsList postId={post._id} /> {/* Ensure CommentsList is defined */}
    </Card>
  );
};

export default BlogPost;