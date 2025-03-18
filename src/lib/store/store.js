// lib/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice"; // Example slice


export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add reducers here
  },
});
