import { createAction } from "@reduxjs/toolkit";
import SLICES_NAME from "../constants";

export const addTodoLoading = createAction(
  `${SLICES_NAME.TODO}/addTodoLoading`
);
export const addTodoSuccess = createAction(
  `${SLICES_NAME.TODO}/addTodoSuccess`
);
