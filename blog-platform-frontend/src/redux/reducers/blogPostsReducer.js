// src/redux/reducers/blogPostsReducer.js
import { FETCH_BLOGPOSTS, CREATE_BLOGPOST, UPDATE_BLOGPOST, DELETE_BLOGPOST } from '../constants/actionTypes';

const initialState = {
    posts: [],
    loading: false,
    error: null,
  };

const blogPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOGPOSTS:
            return { ...state, posts: action.payload };
        case CREATE_BLOGPOST:
            return { ...state, posts: [...state.posts, action.payload] };
        case UPDATE_BLOGPOST:
            return {
                ...state,
                posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)),
            };
        case DELETE_BLOGPOST:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        default:
            return state;
    }
};

export default blogPostsReducer;