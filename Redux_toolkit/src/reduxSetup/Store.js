// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoApp/TodoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});
