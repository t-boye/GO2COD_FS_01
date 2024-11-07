// src/actions/blogPosts.js
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js'; // Ensure this path is correct

// Action creator for fetching all blog posts
export const fetchAllBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogPosts(); // Assuming you have an API function
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
};

// Action creator for adding a new blog post
export const addBlogPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createBlogPost(newPost); // Assuming you have a createBlogPost function in your API
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.error("Error adding blog post:", error);
  }
};

// Action creator for updating an existing blog post
export const updateBlogPost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updateBlogPost(id, updatedPost); // Assuming you have an updateBlogPost function in your API
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.error("Error updating blog post:", error);
  }
};

// Action creator for deleting a blog post
export const deleteBlogPost = (id) => async (dispatch) => {
  try {
    await api.deleteBlogPost(id); // Assuming you have a deleteBlogPost function in your API
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.error("Error deleting blog post:", error);
  }
};