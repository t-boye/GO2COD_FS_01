// src/redux/actions/blogPosts.js
import { FETCH_BLOGPOSTS, CREATE_BLOGPOST, UPDATE_BLOGPOST, DELETE_BLOGPOST } from '../constants/actionTypes';
import * as api from '../../api/blogApi'; // Import API functions

// Action creators
export const fetchBlogPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogPosts(); // Fetch blog posts from API
        dispatch({ type: FETCH_BLOGPOSTS, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const createBlogPost = (newPost) => async (dispatch) => {
    try {
        const { data } = await api.createBlogPost(newPost); // Create a new blog post
        dispatch({ type: CREATE_BLOGPOST, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const updateBlogPost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updateBlogPost(id, updatedPost); // Update an existing blog post
        dispatch({ type: UPDATE_BLOGPOST, payload: data });
    } catch (error) {
        console.error(error);
    }
};

export const deleteBlogPost = (id) => async (dispatch) => {
    try {
        await api.deleteBlogPost(id); // Delete a blog post
        dispatch({ type: DELETE_BLOGPOST, payload: id });
    } catch (error) {
        console.error(error);
    }
};