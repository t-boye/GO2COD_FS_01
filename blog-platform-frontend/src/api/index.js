// src/api/index.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }); // Adjust the base URL as necessary

// Fetch all blog posts
export const fetchBlogPosts = () => API.get('/blogPosts');

// Create a new blog post
export const createBlogPost = (newPost) => API.post('/blogPosts', newPost);

// Update an existing blog post
export const updateBlogPost = (id, updatedPost) => API.patch(`/blogPosts/${id}`, updatedPost);

// Delete a blog post
export const deleteBlogPost = (id) => API.delete(`/blogPosts/${id}`);