import { createSlice, nanoid } from "@reduxjs/toolkit";
import SLICES_NAME from "../constants";

const initialState = {
  loading: false,
  todos: [],
};

const todoSlice = createSlice({
  name: SLICES_NAME.TODO,
  initialState,
  reducers: {

    /**
     * @description todoAdd is the action name or you can say action type or name 
     */

    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(30), ...action.payload });
    },
    removeTodo: (state, action) => {
      const index = state.todos.findIndex((item) => action.id === item.id);
      state.todos.splice(index, 1);
    },

    // data fetch from api's
    addTodoLoading: (state, action) => {
      state.loading = true;
    },
    addTodoSuccess: (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    },
    addTodoFail: (state) => {
      state.loading = false;
      state.todos = [];
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo } = todoSlice.actions;
