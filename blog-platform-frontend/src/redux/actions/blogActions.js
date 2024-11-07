// src/redux/actions/blogActions.js

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

// Fetch Blog Posts
export const fetchBlogPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_BLOG_POSTS_REQUEST });
  try {
    const response = await fetch('YOUR_API_ENDPOINT_FOR_BLOG_POSTS'); // Replace with your API endpoint
    const data = await response.json();
    dispatch({ type: FETCH_BLOG_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_BLOG_POSTS_FAILURE, payload: error.message });
  }
};

// Create Blog Post
export const createBlogPost = (post) => async (dispatch) => {
  dispatch({ type: CREATE_BLOG_POST_REQUEST });
  try {
    const response = await fetch('YOUR_API_ENDPOINT_FOR_CREATING_POST', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    const data = await response.json();
    dispatch({ type: CREATE_BLOG_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_BLOG_POST_FAILURE, payload: error.message });
  }
};

// Update Blog Post
export const updateBlogPost = (postId, updatedPost) => async (dispatch) => {
  dispatch({ type: UPDATE_BLOG_POST_REQUEST });
  try {
    const response = await fetch(`YOUR_API_ENDPOINT_FOR_UPDATING_POST/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    });
    const data = await response.json();
    dispatch({ type: UPDATE_BLOG_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_BLOG_POST_FAILURE, payload: error.message });
  }
};

// Delete Blog Post
export const deleteBlogPost = (postId) => async (dispatch) => {
  dispatch({ type: DELETE_BLOG_POST_REQUEST });
  try {
    await fetch(`YOUR_API_ENDPOINT_FOR_DELETING_POST/${postId}`, {
      method: 'DELETE',
    });
    dispatch({ type: DELETE_BLOG_POST_SUCCESS, payload: postId });
  } catch (error) {
    dispatch({ type: DELETE_BLOG_POST_FAILURE, payload: error.message });
  }
};