import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/todoList-reducer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
