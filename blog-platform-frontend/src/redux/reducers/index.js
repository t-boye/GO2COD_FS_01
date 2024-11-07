// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import blogPostsReducer from './blogPostsReducer'; // Adjust the path if necessary

const rootReducer = combineReducers({
  blogPosts: blogPostsReducer,
  // You can add more reducers here as needed
});

export default rootReducer;