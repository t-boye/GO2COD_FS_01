// src/components/BlogPost.js
import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"; // Updated import
import { useDispatch } from "react-redux";
import { likeBlogPost } from "../actions/blogPosts";
import CommentForm from "./CommentForm"; // Ensure this path is correct
import CommentsList from "./CommentsList"; // Ensure this path is correct

const BlogPost = ({ post }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likeBlogPost(post._id));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLike}>
          Like
        </Button>
        <CommentForm postId={post._id} />
      </CardActions>
      <CommentsList postId={post._id} /> {/* Ensure CommentsList is defined */}
    </Card>
  );
};

export default BlogPost;