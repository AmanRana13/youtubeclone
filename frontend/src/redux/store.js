import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "@/redux/features/todo.slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/index.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(false).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
