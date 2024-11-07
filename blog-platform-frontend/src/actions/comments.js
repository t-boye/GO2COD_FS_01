// src/actions/comments.js
import { ADD_COMMENT } from './types'; // Make sure this path is correct

export const addComment = (postId, commentData) => {
  return {
    type: ADD_COMMENT,
    payload: { postId, commentData },
  };
};