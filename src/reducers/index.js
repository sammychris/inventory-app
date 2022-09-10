import { getItem, saveItem } from '../utils/storage';
import { createSlice } from '@reduxjs/toolkit';

const reducerSlice = createSlice({
  name: 'reducer',
  initialState: {
    user: getItem('user'),
    books: getItem('books'),
    stories: getItem('stories'),
    guest: {},
    view: 'story',
    page: 'register',
    bookField: '',
    bookId: '',
    storyField: '',
    storyId: '',
  },
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload;
        saveItem('user', action.payload);
    },
    setBooks: (state, action) => {
        state.books = action.payload;
        saveItem('books', action.payload);
    },
    setStories: (state, action) => {
        state.stories = action.payload;
        saveItem('stories', action.payload);
    },
    setGuest: (state, action) => {
        state.guest = action.payload;
    },
    setView: (state, action) => {
        state.view = action.payload;
    },
    setPage: (state, action) => {
        state.page = action.payload;
    },
    setBookField: (state, action) => {
        state.bookField = action.payload;
    },
    setBookId: (state, action) => {
        state.bookId = action.payload;
    },
    setStoryField: (state, action) => {
        state.storyField = action.payload;
    },
    setStoryId: (state, action) => {
        state.storyId = action.payload;
    },

  },
});

export const {
    setUser,
    setBooks,
    setStories,
    setGuest,
    setView,
    setPage, 
    setBookField,
    setBookId,
    setStoryField,
    setStoryId 
} = reducerSlice.actions;

export default reducerSlice.reducer;
