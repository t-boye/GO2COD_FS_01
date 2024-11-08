import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js'; // Ensure this path is correct

// Action creator for fetching all blog posts
export const fetchAllBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogPosts(); // Fetch all blog posts from the API
    dispatch({ type: FETCH_ALL, payload: data }); // Dispatch the fetched data
  } catch (error) {
    console.error("Error fetching blog posts:", error); // Log any errors
  }
};

// Action creator for adding a new blog post
export const addBlogPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createBlogPost(newPost); // Create a new blog post via the API
    dispatch({ type: CREATE, payload: data }); // Dispatch the newly created post
  } catch (error) {
    console.error("Error adding blog post:", error); // Log any errors
  }
};

// Action creator for updating an existing blog post
export const updateBlogPost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updateBlogPost(id, updatedPost); // Update the blog post via the API
    dispatch({ type: UPDATE, payload: data }); // Dispatch the updated post
  } catch (error) {
    console.error("Error updating blog post:", error); // Log any errors
  }
};

// Action creator for deleting a blog post
export const deleteBlogPost = (id) => async (dispatch) => {
  try {
    await api.deleteBlogPost(id); // Delete the blog post via the API
    dispatch({ type: DELETE, payload: id }); // Dispatch the ID of the deleted post
  } catch (error) {
    console.error("Error deleting blog post:", error); // Log any errors
  }
};