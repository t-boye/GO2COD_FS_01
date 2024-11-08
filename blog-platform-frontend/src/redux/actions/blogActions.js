// src/redux/actions/blogActions.js

import axios from 'axios';

// Action Types
export const FETCH_BLOG_POSTS_REQUEST = 'FETCH_BLOG_POSTS_REQUEST';
export const FETCH_BLOG_POSTS_SUCCESS = 'FETCH_BLOG_POSTS_SUCCESS';
export const FETCH_BLOG_POSTS_FAILURE = 'FETCH_BLOG_POSTS_FAILURE';

export const CREATE_BLOG_POST_REQUEST = 'CREATE_BLOG_POST_REQUEST';
export const CREATE_BLOG_POST_SUCCESS = 'CREATE_BLOG_POST_SUCCESS';
export const CREATE_BLOG_POST_FAILURE = 'CREATE_BLOG_POST_FAILURE';

export const UPDATE_BLOG_POST_REQUEST = 'UPDATE_BLOG_POST_REQUEST';
export const UPDATE_BLOG_POST_SUCCESS = 'UPDATE_BLOG_POST_SUCCESS';
export const UPDATE_BLOG_POST_FAILURE = 'UPDATE_BLOG_POST_FAILURE';

export const DELETE_BLOG_POST_REQUEST = 'DELETE_BLOG_POST_REQUEST';
export const DELETE_BLOG_POST_SUCCESS = 'DELETE_BLOG_POST_SUCCESS';
export const DELETE_BLOG_POST_FAILURE = 'DELETE_BLOG_POST_FAILURE';

// Replace with your actual API endpoints
const API_BASE_URL = 'http://localhost:5000/api'; // Update this to your backend API URL

// Utility function to handle API calls
const handleApiCall = async (dispatch, actionType, apiCall) => {
  dispatch({ type: actionType.REQUEST });
  try {
    const response = await apiCall();
    dispatch({ type: actionType.SUCCESS, payload: response.data });
  } catch (error) {
    console.error('API call failed:', error); // Log the error for debugging
    dispatch({ type: actionType.FAILURE, payload: error.response ? error.response.data : `Error: ${error.message}` });
  }
};

// Fetch Blog Posts
export const fetchBlogPosts = () => (dispatch) => {
  handleApiCall(dispatch, {
    REQUEST: FETCH_BLOG_POSTS_REQUEST,
    SUCCESS: FETCH_BLOG_POSTS_SUCCESS,
    FAILURE: FETCH_BLOG_POSTS_FAILURE,
  }, () => axios.get(`${API_BASE_URL}/posts`));
};

// Create Blog Post
export const createBlogPost = (post) => (dispatch) => {
  handleApiCall(dispatch, {
    REQUEST: CREATE_BLOG_POST_REQUEST,
    SUCCESS: CREATE_BLOG_POST_SUCCESS,
    FAILURE: CREATE_BLOG_POST_FAILURE,
  }, () => axios.post(`${API_BASE_URL}/posts`, post, {
    headers: {
      'Content-Type': 'application/json',
    },
  }));
};

// Update Blog Post
export const updateBlogPost = (postId, updatedPost) => (dispatch) => {
  handleApiCall(dispatch, {
    REQUEST: UPDATE_BLOG_POST_REQUEST,
    SUCCESS: UPDATE_BLOG_POST_SUCCESS,
    FAILURE: UPDATE_BLOG_POST_FAILURE,
  }, () => axios.put(`${API_BASE_URL}/posts/${postId}`, updatedPost, {
    headers: {
      'Content-Type': 'application/json',
    },
  }));
};

// Delete Blog Post
export const deleteBlogPost = (postId) => (dispatch) => {
  handleApiCall(dispatch, {
    REQUEST: DELETE_BLOG_POST_REQUEST,
    SUCCESS: DELETE_BLOG_POST_SUCCESS,
    FAILURE: DELETE_BLOG_POST_FAILURE,
  }, () => axios.delete(`${API_BASE_URL}/posts/${postId}`));
};